import Head from "next/head";
import { Main } from "../../styles/main";
import Result from "../../Components/Results";
import NoResults from "../../Components/NoResults";

export default function Search({ sneakers }) {
  return (
    <div>
      <Head>
        <title>Search</title>
        <meta
          name="description"
          content="The best place to find your dream sneakers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {sneakers.length > 0 ? <Result sneakers={sneakers} /> : <NoResults/>}
      </Main>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;
  const { slug } = params;
  try {
    const data = await fetch(`${process.env.API_ENDPOINT}/api/search/${slug}`);

    const sneakers = await data.json();

    return {
      props: {
        sneakers,
      },
    };
  } catch (e) {
    return {
      props: {
        sneakers: [],
      },
    };
  }
};
