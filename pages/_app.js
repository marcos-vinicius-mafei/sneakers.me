import { GlobalStyle } from "../styles/global";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import UserProvider from "../Contexts/user";
import CartProvider from "../Contexts/cart";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <CartProvider>
        <GlobalStyle />
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: "toast--global",
            duration: 5000,
          }}
          gutter={15}
        />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </UserProvider>
  );
}

export default MyApp;
