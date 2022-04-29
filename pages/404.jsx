import Head from "next/head";

const notFound = ()=>{
    return(
        <div>
            <Head>
                <title>Page not found</title>
            </Head>
            <h1>not found page</h1>
        </div>
    )
}

export default notFound