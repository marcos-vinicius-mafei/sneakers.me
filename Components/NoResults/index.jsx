import { Container } from "./style"

const NoResults = () =>{
    return(
        <Container>
            <h2>No <a>Results</a></h2>
            <p>We found nothing related to your search</p>
            <figure>
                <img src="/assets/images/noResults.svg" alt="No results for your search" />
                <figcaption>No results for your search</figcaption>
            </figure>
        </Container>
    )
}


export default NoResults