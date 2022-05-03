

const CartItem = ({sneaker}) =>{
    return(
        <div>
            <figure>
                <img src={sneaker.img} alt={sneaker.name} />
                <figcaption>{sneaker.name}</figcaption>
            </figure>
            <div>
                <h3>{sneaker.name}</h3>
                <div>
                    <button>Remove item</button>
                    <h4>Price: {sneaker.price}</h4>
                </div>
            </div>
        </div>
    )
}

export default CartItem