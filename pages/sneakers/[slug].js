import Image from "next/image";

const sneaker = ({sneaker}) => {

    return(
        <div>
            <Image src={sneaker.thumbnail} alt={sneaker.shoeName} width={400} height={250}/>
            <div className="infos">
                <p>
                    {`Price : ${sneaker.lowestResellPrice.flightClub}`}
                </p>
                <p>
                   Name: {sneaker.shoeName}
                </p>
                <p>
                    Release Date : {sneaker.releaseDate}
                </p>
            </div>
        </div>
    )
};


export async function getServerSideProps(context){

   const {params} = context;

   const {slug} = params;

   try{
    const data = await fetch(`${process.env.API_ENDPOINT}/api/sneakers/${slug}`,{timeout: 10000})
    const sneaker = await data.json();
    return {
        props:{
            sneaker
        }
    }
   }catch(error){
        return{
            notFound: true,
        }
   }
}

export default sneaker;
