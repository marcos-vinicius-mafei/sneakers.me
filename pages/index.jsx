import Head from "next/head";
import BigShoe from "../Components/BigShoe";
import Section from "../Components/Section";
import { Main, BrandsList } from "../styles/main";
import { motion } from "framer-motion";

export default function Home({ jordan, yeezy, asics, popular }) {
  return (
    <motion.div
      initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ scaleX: 1, scaleY: 1, opacity: 1 }}
    >
      <Head>
        <title>Sneaker.ME</title>
        <meta
          name="description"
          content="The best place to find your dream sneakers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <BigShoe />

        <BrandsList>
          <Section sneakers={jordan} brand="Jordan" />
          <Section sneakers={yeezy} brand="Yeezy" />
          <Section sneakers={asics} brand="Asics" />
          <div id="popular">
            <Section sneakers={popular} brand="Popular" />
          </div>
        </BrandsList>
      </Main>
    </motion.div>
  );
}

export const getStaticProps = async (ctx) => {
  const data = await fetch(`${process.env.API_ENDPOINT}/api/sneakers/jordan`);

  const jordan = await data.json();

  const data2 = await fetch(`${process.env.API_ENDPOINT}/api/sneakers/yeezy`);

  const yeezy = await data2.json();

  const data3 = await fetch(`${process.env.API_ENDPOINT}/api/sneakers/asics`);

  const asics = await data3.json();

  const data4 = await fetch(`${process.env.API_ENDPOINT}/api/sneakers/`);

  const popular = await data4.json();

  return {
    props: {
      jordan,
      yeezy,
      asics,
      popular,
    },
  };
};
