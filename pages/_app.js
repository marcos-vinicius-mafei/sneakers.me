import { GlobalStyle } from "../styles/global";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import UserProvider from "../Contexts/user";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Header/>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer/>
    </UserProvider>
  );
}

export default MyApp;
