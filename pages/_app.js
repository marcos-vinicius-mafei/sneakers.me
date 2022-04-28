import { GlobalStyle } from "../styles/global";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
