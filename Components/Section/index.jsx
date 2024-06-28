import Image from "next/image"
import SneakerList from "../SneakerList"
import { Container } from "./style"


const Section = ({brand,sneakers})=>{
    return(
        <Container>
            <div className="brand--infos">
                <h1>{brand}</h1>
                {brand !== "Popular" && <figure>
                    <Image src={`/assets/images/${brand}.png`} alt={brand} width={100} height={100} objectFit="contain"/>
                    <figcaption>{`${brand} logo`}</figcaption>
                </figure>}
            </div>
            <SneakerList sneakers={sneakers}/>
        </Container>
    )
}

export default Section