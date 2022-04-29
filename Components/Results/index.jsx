import SneakerCard from "../SneakerCard"
import {Container} from "./style"

const Result = ({sneakers}) =>{
    return(
        <Container>
            <h2>Search <a>Results</a></h2>
            <ul>
                {sneakers.map(sneaker=><li key={sneaker.shoeName}><SneakerCard sneaker={sneaker}/></li>)}
            </ul>
        </Container>
    )
}


export default Result