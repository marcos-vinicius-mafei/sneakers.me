import { Container } from "./style"
import {FaTrashAlt} from "react-icons/fa"
import {TiMinus,TiPlus} from "react-icons/ti"

const CartItem = ({sneaker}) =>{
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
                        <button><TiMinus className="icons"/></button>
                        <button><TiPlus className="icons"/></button>
                        <button><FaTrashAlt className="icons"/></button>
                    </div>
                    <h3 className="product--price">$ <a>{sneaker.price}</a></h3>
                </div>
            </div>
        </Container>
    )
}

export default CartItem