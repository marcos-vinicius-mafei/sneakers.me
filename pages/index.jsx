import Head from "next/head";
import SneakerList from "../Components/SneakerList";

export default function Home({ jordan,yeezy, asics}) {
  return (
    <div>
      <Head>
        <title>Sneaker.ME</title>
        <meta
          name="description"
          content="The best place to find your dream sneakers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ marginTop: "100px" }}>
        <SneakerList sneakers={jordan} />
      </div>
      <div style={{ marginTop: "100px" }}>
        <SneakerList sneakers={yeezy} />
      </div>
      <div style={{ marginTop: "100px" }}>
        <SneakerList sneakers={asics} />
      </div>
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  const data = await fetch(`${process.env.API_ENDPOINT}/api/sneakers/jordan`);

  const jordan = await data.json();

  const data2 = await fetch(`${process.env.API_ENDPOINT}/api/sneakers/yeezy`);

  const yeezy = await data2.json();

  const data3 = await fetch(`${process.env.API_ENDPOINT}/api/sneakers/asics`);

  const asics = await data3.json();

  return {
    props: {
      jordan,
      yeezy,
      asics
    },
  };
};
