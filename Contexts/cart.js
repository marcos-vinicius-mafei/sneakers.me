import { createContext,useContext,useState,useEffect } from "react";

const CartContext= createContext()

export const useCart = () => useContext(CartContext)

const CartProvider = ({children})=>{

    const [cart,setCart] = useState(null)

    useEffect(() =>{
        setCart(localStorage.getItem("@sneakerMe cart") || null)
    },[])

    
    return(
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider