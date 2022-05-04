import { Container } from "./style"
import {FaTrashAlt} from "react-icons/fa"
import {TiMinus,TiPlus} from "react-icons/ti"
import { useCart } from "../../Contexts/cart"

const CartItem = ({sneaker}) =>{

    const {removeFromCart,addToCart,removeUnit} = useCart()

    return(
        <Container>
            <figure>
                <img src={sneaker.img} alt={sneaker.name} />
                <figcaption>{sneaker.name}</figcaption>
            </figure>
            <div className="product--infos">
                <h3 className="product--name">{sneaker.name}</h3>
                <h4 className="product--quantity">Quantity: {sneaker.quantity}</h4>
                <div className="infos--container">
                    <div className="quantity--controller">
                        <button onClick={()=>removeUnit(sneaker)}><TiMinus className="icons"/></button>
                        <button onClick={() =>addToCart(sneaker)}><TiPlus className="icons"/></button>
                        <button onClick={()=>removeFromCart(sneaker)}><FaTrashAlt className="icons"/></button>
                    </div>
                    <h3 className="product--price">$ <a>{sneaker.price}</a></h3>
                </div>
            </div>
        </Container>
    )
}

export default CartItem