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

export const getStaticProps = async () => {
  const sneakers = ['jordan', 'yeezy', 'asics', ''];
  const promises = sneakers.map(sneaker => fetch(`${process.env.API_ENDPOINT}/api/sneakers/${sneaker}`).then(res => res.json()));
  const [jordan, yeezy, asics, popular] = await Promise.all(promises);
  
  return {
    props: {
      jordan,
      yeezy,
      asics,
      popular,
    },
    revalidate: 10,
  };
};
