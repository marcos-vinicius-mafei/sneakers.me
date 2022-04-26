import { GlobalStyle } from "../styles/global";
import Header from "../Components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
