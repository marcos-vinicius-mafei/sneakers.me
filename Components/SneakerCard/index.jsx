import Image from "next/image";
import { Card } from "./style";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const SneakerCard = ({ sneaker }) => {

  return (
    <Card>
      <Link href={`/sneakers/${sneaker.urlKey}`}>
        <a className="redirect">
          <FaExternalLinkAlt className="icon" />
        </a>
      </Link>
      <Link href={`/sneakers/${sneaker.urlKey}`}>
        <a>
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
        </a>
      </Link>
      <div className="infos">
        <h3 className="name">{sneaker.shoeName}</h3>
        <div className="container">
          <h3 className="price">$ {sneaker.lowestResellPrice.flightClub || sneaker.lowestResellPrice.stockX || sneaker.lowestResellPrice.goat}</h3>
          <div className="release">{sneaker.releaseDate}</div>
        </div>
      </div>
    </Card>
  );
};

export default SneakerCard;
