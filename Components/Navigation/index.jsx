import { RiShoppingCartLine } from "react-icons/ri";
import { GiConverseShoe } from "react-icons/gi";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { Container } from "./style";
import { useUser } from "../../Contexts/user";
import { useRouter } from "next/router";

const Navigation = ({ setMenu }) => {
  const { user,logout } = useUser();
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
              }, 600);
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
              setMenu(false);
              router.push("/login")
            }}>
              Logout <FiLogOut className="icons" />
            </li>
          )}
          <li>Theme</li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navigation;
