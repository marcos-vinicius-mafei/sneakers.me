import CartItem from "../CartItem";
import { useCart } from "../../Contexts/cart";
import { Container } from "./style";
import { RiShoppingCartLine } from "react-icons/ri";
import {GiRunningShoe} from "react-icons/gi";
import { useRouter } from "next/router";

const Cart = () => {
  const { cart } = useCart();
  const router = useRouter();

  return (
    <Container>
      <h2>
        Cart <RiShoppingCartLine className="icon" />
      </h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.name}>
              <CartItem sneaker={item} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty--cart">
            <div>
                <GiRunningShoe className="shoe--icon"/>
                <h3>{"You don't have any product in cart"}</h3>
                <button onClick={()=>router.push("/")}>Shop now</button>
            </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;
