import { RiShoppingCartLine } from "react-icons/ri";
import { GiConverseShoe } from "react-icons/gi";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { Container } from "./style";
import { useUser } from "../../Contexts/user";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useCart } from "../../Contexts/cart";
import ThemeButton from "../ThemeButton";

const Navigation = ({ setMenu ,theme, toggleTheme}) => {
  const { user,logout } = useUser();
  const {clearCart} = useCart();
  const router = useRouter();

  return (
    <Container
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0, x: "100vw" }}
    >
      <nav>
        <ul>
          <li
            onClick={() => {
              router.push("/cart");
              setMenu(false);
            }}
          >
            Cart <RiShoppingCartLine className="icons" />
          </li>
          <li
            onClick={() => {
              router.push("/");
              setTimeout(() => {
                setMenu(false);
                document
                  .getElementById("popular")
                  .scrollIntoView({ behavior: "smooth" });
              }, 500);
            }}
          >
            Popular <GiConverseShoe className="icons" />
          </li>
          {user==null? (
            <li
              onClick={() => {
                router.push("/login");
                setMenu(false);
              }}
            >
              Login
              <FiLogIn className="icons" />
            </li>
          ) : (
            <li onClick={() => {
              logout()
              clearCart()
              localStorage.removeItem("@sneakerMe user")
              localStorage.removeItem("@sneakerMe cart")
              toast("See you!",{icon:"👋"})
              setMenu(false);
              router.push("/login")
            }}>
              Logout <FiLogOut className="icons" />
            </li>
          )}
          
          <li ><ThemeButton theme={theme} toggleTheme={toggleTheme}/></li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navigation;
