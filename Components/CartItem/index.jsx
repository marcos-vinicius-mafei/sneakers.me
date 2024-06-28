import { Container } from "./style"
import {FaTrashAlt} from "react-icons/fa"
import {TiMinus,TiPlus} from "react-icons/ti"
import { useCart } from "../../Contexts/cart"
import Link from "next/link"
import Image from 'next/image'

const CartItem = ({sneaker}) =>{

    const {removeFromCart,addToCart,removeUnit} = useCart()

    return(
        <Container>
            <Link href={`/sneakers/${sneaker.url}`} passHref>
                <a className="img--url">
                    <figure>
                        <Image src={sneaker.img} alt={sneaker.name} layout="fill" />
                        <figcaption>{sneaker.name}</figcaption>
                    </figure>
                </a>
            </Link>
            <div className="product--infos">
                <Link href={`/sneakers/${sneaker.url}`}>
                    <a>
                        <h3 className="product--name">{sneaker.name}</h3>
                    </a>
                </Link>
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