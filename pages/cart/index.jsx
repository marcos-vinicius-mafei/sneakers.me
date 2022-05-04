import Router from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import toast from "react-hot-toast";
import {Container} from "../../styles/cart"
import CheckOut from "../../Components/CheckOut";
import Cart from "../../Components/Cart";
import { useCart } from "../../Contexts/cart";

const CartPage = () => {

  const {cart} = useCart();

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
        {cart.length > 0 && <CheckOut/>}
      </div>
    </Container>
  );
};

export default CartPage;
