import { useState } from "react";
import { FancyHeader } from "./style";

const Header = () => {

    const [menu,setMenu] = useState(false)

  return (
    <FancyHeader menu={menu}>
      <div className="wrapper" onClick={()=>setMenu(!menu)}>
          <h1>Sneaker.<a>ME</a></h1>
          <div className={"hamburguer"}></div>
      </div>
    </FancyHeader>
  );
};

export default Header;
