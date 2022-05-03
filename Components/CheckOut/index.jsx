import { useCart } from "../../Contexts/cart";
import { Container } from "./style";

const CheckOut = () => {
  const { cart } = useCart();

  return (
    <Container>
      <h1>Checkout</h1>
      <div className="checkout--infos">
          <h3>Amount of products: <a></a></h3>
          <h3>Amount of different products:<a></a></h3>
      </div>
      <div className="checkout--final">
          <h2>Total:<a></a></h2>
          <button>Finish</button>
      </div>
    </Container>
  );
};

export default CheckOut;
