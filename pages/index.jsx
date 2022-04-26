import Head from 'next/head'
import Image from 'next/image'

export default function Home({sneakers}) {

  return (
    <div>
      <Head>
        <title>Sneaker.ME</title>
        <meta name="description" content="The best place to find your dream sneakers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>hello</h1>
      </div>
     
    </div>
  )
}


export const getStaticProps = async (ctx) => {

  const data = await fetch(`${process.env.API_ENDPOINT}/api/sneakers`)
  
  const sneakers = await data.json()

  return {
    props: {
      sneakers
    }
  }
}
