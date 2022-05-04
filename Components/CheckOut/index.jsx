import { useCart } from "../../Contexts/cart";
import { Container } from "./style";

const CheckOut = () => {
  const { cart } = useCart();

  const different = cart.length
  const amount = cart.reduce((acc, item) => {return acc+item.quantity},0)
  const total = cart.reduce((acc, item) => {return acc+(item.quantity * item.price)},0)

  return (
    <Container>
      <h1>Checkout</h1>
      <div className="checkout--infos">
          <h3>Amount of products: <a>{amount}</a></h3>
          <h3>Amount of different products: <a>{different}</a></h3>
      </div>
      <div className="checkout--final">
          <h2>Total: $<a>{total}</a></h2>
          <button>Finish</button>
      </div>
    </Container>
  );
};

export default CheckOut;
