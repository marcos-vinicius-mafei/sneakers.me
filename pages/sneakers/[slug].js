import Head from "next/head";
import Image from "next/image";
import toast from "react-hot-toast";
import { SneakerPage, Container } from "../../styles/sneaker";
import { useUser } from "../../Contexts/user";
import { useCart } from "../../Contexts/cart";

const Sneaker = ({ sneaker }) => {
  const { user } = useUser();
  const { addToCart } = useCart();

  return (
    <SneakerPage>
      <Head>
        <title>{sneaker.shoeName}</title>
      </Head>
      <Container>
        <div className="image--container">
          <Image
            src={sneaker.thumbnail}
            alt={sneaker.shoeName}
            layout="intrinsic"
            width={600}
            height={400}
          />
        </div>
        <div className="product--infos">
          <h1>{sneaker.shoeName}</h1>
          {sneaker.description && (
            <div className="description--container">
              <h1 className="description">Description</h1>
              <p>{sneaker.description}</p>
            </div>
          )}
          {sneaker.releaseDate && (
            <h3>
              Release Date: <a>{sneaker.releaseDate}</a>
            </h3>
          )}
          <div className="cart">
            <button
              onClick={() => {
                if (user !== null) {
                  toast.success("Added to cart");
                  addToCart({
                    img: sneaker.thumbnail,
                    name: sneaker.shoeName,
                    url: sneaker.urlKey,
                    price:
                      sneaker.lowestResellPrice.flightClub ||
                      sneaker.lowestResellPrice.stockX ||
                      sneaker.lowestResellPrice.goat,
                  });
                } else {
                  toast.error("You must be logged in to add to cart");
                }
              }}
            >
              Add to Cart
            </button>
            <h2>
              {"$"}{" "}
              <a>
                {sneaker.lowestResellPrice.flightClub ||
                  sneaker.lowestResellPrice.stockX ||
                  sneaker.lowestResellPrice.goat}
              </a>
            </h2>
          </div>
        </div>
      </Container>
    </SneakerPage>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const { slug } = params;

  try {
    const data = await fetch(
      `${process.env.API_ENDPOINT}/api/sneakers/${slug}`,
      { timeout: 10000 }
    );
    const sneaker = await data.json();
    return {
      props: {
        sneaker,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Sneaker;
