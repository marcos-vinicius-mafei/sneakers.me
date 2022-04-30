import Head from "next/head";
import BigShoe from "../Components/BigShoe";
import Section from "../Components/Section";
import { Main, BrandsList} from "../styles/main";
import { asics } from "../dev/asics";
import { jordan } from "../dev/jordan";
import { yeezy } from "../dev/yeezy";
import { popular } from "../dev/popular";



export default function Home() {

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
      <Main>
        <BigShoe/>

        <BrandsList>
          <Section sneakers={jordan} brand="Jordan"/>
          <Section sneakers={yeezy} brand="Yeezy"/>
          <Section sneakers={asics} brand="Asics"/>
          <div id="popular">
            <Section sneakers={popular} brand="Populares"/>
          </div>
        </BrandsList>
      </Main>
    </div>
  );
}

// export const getStaticProps = async (ctx) => {
//   const data = await fetch(`${process.env.API_ENDPOINT}/api/sneakers/jordan`);

//   const jordan = await data.json();

//   const data2 = await fetch(`${process.env.API_ENDPOINT}/api/sneakers/yeezy`);

//   const yeezy = await data2.json();

//   const data3 = await fetch(`${process.env.API_ENDPOINT}/api/sneakers/asics`);

//   const asics = await data3.json();

//   const data4 = await fetch(`${process.env.API_ENDPOINT}/api/sneakers/`);

//   const popular = await data4.json()

//   return {
//     props: {
//       jordan,
//       yeezy,
//       asics,
//       popular
//     },
//   };
// };
