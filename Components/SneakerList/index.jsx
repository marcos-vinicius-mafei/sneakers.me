import SneakerCard from "../SneakerCard";
import { Container, List } from "./style";
import { useState, useRef, useEffect } from "react";

const SneakerList = ({ sneakers }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef()

  useEffect(() =>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[])

  return (
    <Container ref={carousel}>
      <List drag="x" dragConstraints={{right:0, left: -width}} whileTap={{cursor: "grabbing"}}>
        {sneakers.map((sneaker) => (
          <li key={sneaker.shoeName}>
            <SneakerCard sneaker={sneaker} />
          </li>
        ))}
      </List>
    </Container>
  );
};

export default SneakerList;
