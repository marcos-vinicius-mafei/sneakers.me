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
      console.log(res);
      const products = res.data();
      console.log(products.products);
      const found = products.products.find(product => product.name == item.name);
      console.log(found);
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

  const removeFromCart = (item) => {
    setCart(cart.filter((sneaker) => sneaker.name != item.name));
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, clearCart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
