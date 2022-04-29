import { FancyFooter } from "./style";

const Footer = () => {
  return (
    <FancyFooter>
      <div className="wrapper">
        <p className="version"><a>V</a>2022</p>
        <p className="copyright"><a>©</a> Sneaker.ME</p>
        <p className="developer">
          Developed and Designed by{" "}
          <a href="https://marcos-mafei-portfolio.vercel.app/" rel="noopener noreferrer" target="_blank">Marcos Mafei</a>
        </p>
      </div>
    </FancyFooter>
  );
};

export default Footer;
