import { createContext, useContext, useState, useEffect } from "react";
import { useUser } from "./user";
import { db } from "../firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const { user } = useUser();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("@sneakerMe cart")) || []);
  }, []);

  const clearCart = () => {
    setCart([]);
  };

  const addToCart = (item) => {
    const userCart = doc(db, "carts", user.uid);
    const cartInfo = getDoc(userCart).then((res) => {
      const products = res.data();
      const found = products.products.find(product => product.name == item.name);
      if (found) {
        const updateField = {
          products: [...cart.filter(el=>el.name !=item.name), { ...found, quantity: found.quantity + 1 }],
        };
        setCart(updateField.products);
        localStorage.setItem("@sneakerMe cart", JSON.stringify(updateField.products));
        const newDoc = updateDoc(userCart, updateField)
      } else {
        const updateField = { products: [...cart.filter(el=>el.name !=item.name), { ...item, quantity: 1 }] };
        setCart(updateField.products);
        localStorage.setItem("@sneakerMe cart", JSON.stringify(updateField.products));
        const newDoc = updateDoc(userCart, updateField)
      }
    });
  };

  const removeUnit = (item)=>{
    const userCart = doc(db, "carts", user.uid);
    const cartInfo = getDoc(userCart).then(res=>{
      const products = res.data()
      const found = products.products.find(product => product.name == item.name);
      if(found.quantity>1){
        const updateField = {
          products: [...cart.filter(el=>el.name !=item.name), { ...found, quantity: found.quantity - 1 }],
        };
        setCart(updateField.products);
        localStorage.setItem("@sneakerMe cart", JSON.stringify(updateField.products));
        const newDoc = updateDoc(userCart, updateField)
      }else{
        const updateField = {
          products: [...cart.filter(el=>el.name !=item.name)],
        };
        setCart(updateField.products);
        localStorage.setItem("@sneakerMe cart", JSON.stringify(updateField.products));
        const newDoc = updateDoc(userCart, updateField)
      }
    })
  }

  const removeFromCart = (item) => {
    const userCart = doc(db, "carts", user.uid);
    const cartInfo = getDoc(userCart).then(res=>{
      const products = res.data()
      const filter = products.products.filter(el=>el.name != item.name)
      setCart(filter)
      localStorage.setItem("@sneakerMe cart", JSON.stringify(filter));
      const newDoc = updateDoc(userCart,{products: filter})
    })
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, clearCart, addToCart, removeFromCart,removeUnit }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
