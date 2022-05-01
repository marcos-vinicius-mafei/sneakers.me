import SneakerList from "../SneakerList"
import { Container } from "./style"


const Section = ({brand,sneakers})=>{
    return(
        <Container>
            <div className="brand--infos">
                <h1>{brand}</h1>
                {brand !== "Popular" && <figure>
                    <img src={`/assets/images/${brand}.png`} alt={brand}/>
                    <figcaption>{`${brand} logo`}</figcaption>
                </figure>}
            </div>
            <SneakerList sneakers={sneakers}/>
        </Container>
    )
}

export default Section