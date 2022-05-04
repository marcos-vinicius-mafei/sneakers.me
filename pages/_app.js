import { GlobalStyle } from "../styles/global";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import UserProvider from "../Contexts/user";
import CartProvider from "../Contexts/cart";
import { Toaster } from "react-hot-toast";
import NextNProgress from "nextjs-progressbar";
import { useState,useEffect } from "react";

function MyApp({ Component, pageProps }) {

  const [theme,setTheme] = useState("dark")

  const toggleTheme = () =>{
    if(theme == "dark"){
      setTheme("light")
      localStorage.setItem("@sneakerMe theme", "light")
    }else{
      setTheme("dark")
      localStorage.setItem("@sneakerMe theme", "dark")
    }
  }

  useEffect(()=>{
    setTheme(localStorage.getItem("@sneakerMe theme") || "dark");
  })

  return (
    <UserProvider>
      <CartProvider>
        <GlobalStyle theme={theme}/>
        <NextNProgress color="var(--orange)"/>
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: "toast--global",
            duration: 5000,
          }}
          gutter={15}
        />
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </UserProvider>
  );
}

export default MyApp;
