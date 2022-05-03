import CartItem from "../CartItem";
import { useCart } from "../../Contexts/cart";
import { Container } from "./style";
import { RiShoppingCartLine } from "react-icons/ri";

const Cart = () => {
  const { cart } = useCart();

  return (
    <Container>
      <h2>Cart <RiShoppingCartLine className="icon"/></h2>
      <ul>
        {cart.map((item) => (
          <li key={item.name}>
            <CartItem sneaker={item} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Cart
