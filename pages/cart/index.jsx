import Router from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import toast from "react-hot-toast";
import {Container} from "../../styles/cart"
import CheckOut from "../../Components/CheckOut";
import Cart from "../../Components/Cart";

const CartPage = () => {
  useEffect(() => {
    if (!localStorage.getItem("@sneakerMe user")) {
      toast("Login first",{icon:"⚠️"})
      Router.push("/login");
    }
  }, []);

  return (
    <Container>
      <Head>
        <title>Cart</title>
      </Head>
      <div className="cartPage--container">
        <Cart/>
        <CheckOut/>
      </div>
    </Container>
  );
};

export default CartPage;
