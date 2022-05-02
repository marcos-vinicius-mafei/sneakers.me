import Router from "next/router";
import Head from "next/head";
import { useCart } from "../../Contexts/cart";
import { useUser } from "../../Contexts/user";
import { useEffect } from "react";
import toast from "react-hot-toast";

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
    </div>
  );
};

export default Cart;
