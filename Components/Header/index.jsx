import { useState } from "react";
import { FancyHeader } from "./style";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import Navigation from "../Navigation";
import { AnimatePresence } from "framer-motion";

const Header = ({theme,toggleTheme}) => {
  const [menu, setMenu] = useState(false);
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      router.push(`/search/${text}`);
    }
    setText("");
  };

  return (
    <FancyHeader menu={menu}>
      <div className="wrapper">
        <Link href="/">
          <h1>
            Sneaker.<a>ME</a>
          </h1>
        </Link>
        <div className="search--wrapper">
          <form className="search" onSubmit={handleSubmit}>
            <button type="submit">
              <FaSearch className="icon" />
            </button>
            <input
              type="text"
              placeholder="Search sneakers"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </form>
        </div>
        <div className="hamburguer" onClick={() => setMenu(!menu)}></div>
      </div>
      <AnimatePresence>
        {menu && (
            <Navigation key="navigation" setMenu={setMenu} theme={theme} toggleTheme={toggleTheme}/>
        )}
      </AnimatePresence>
    </FancyHeader>
  );
};

export default Header;
