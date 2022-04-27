import { useState } from "react";
import { FancyHeader } from "./style";
import Link from "next/link";

const Header = () => {

    const [menu,setMenu] = useState(false)

  return (
    <FancyHeader menu={menu}>
      <div className="wrapper">
          <Link href="/">
              <h1>Sneaker.<a>ME</a></h1>
          </Link>
          <div className={"hamburguer"} onClick={()=>setMenu(!menu)}></div>
      </div>
    </FancyHeader>
  );
};

export default Header;
