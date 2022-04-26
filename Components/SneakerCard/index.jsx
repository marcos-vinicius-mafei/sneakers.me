import Image from "next/image";
import { Card } from "./style";

const SneakerCard = ({ sneaker }) => {
  return (
    <Card>
      <figure>
          <Image
            src={sneaker.thumbnail}
            alt={sneaker.shoeName}
            width={250}
            height={230}
            layout="fixed"
            quality={100}
            className="shoe--image"
          />
      </figure>
      <div className="infos">
          <h3>{sneaker.shoeName}</h3>
          <h3 className="price"><p>$</p>{sneaker.lowestResellPrice.flightClub}</h3>
      </div>
    </Card>
  );
};

export default SneakerCard;
