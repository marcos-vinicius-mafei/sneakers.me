import { GlobalStyle } from "../styles/global";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import UserProvider from "../Contexts/user";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Toaster
        position="bottom-center"
        toastOptions={{
          className:"toast--global",
          duration: 5000,
        }}
        gutter={15}
      />
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </UserProvider>
  );
}

export default MyApp;
