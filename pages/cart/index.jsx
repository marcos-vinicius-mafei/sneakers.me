import Router from "next/router";
import Head from "next/head";
import { useCart } from "../../Contexts/cart";
import { useUser } from "../../Contexts/user";
import { useEffect } from "react";
import toast from "react-hot-toast";
import CartItem from "../../Components/CartItem";

const Cart = () => {
  const { cart } = useCart();
  const { user } = useUser();

  useEffect(() => {
    if (!localStorage.getItem("@sneakerMe user")) {
      toast("Login first",{icon:"⚠️"})
      Router.push("/login");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>
      <div>
        <ul>
          {cart.map(item=><li key={item.id}><CartItem sneaker={item}/></li>)}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
