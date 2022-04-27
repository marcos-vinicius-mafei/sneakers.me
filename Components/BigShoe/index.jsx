import { useMotionValue, useTransform, motion } from "framer-motion";
import { Container } from "./style";
import { FaLongArrowAltRight } from "react-icons/fa";

const BigShoe = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const shopNow = () => {
    document.getElementById("popular").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <motion.div style={{ perspective: 2000 }} className="circle">
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.05}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div>
            <motion.figure
              style={{
                x,
                y,
                rotateX,
                rotateY,
                z: 100000,
                pointerEvents: "none",
              }}
              drag
              dragElastic={0.05}
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.img
                src="/assets/images/sneaker.png"
                alt="Orange Jordan"
                className="sneaker"
              />
              <figcaption>Orange Jordan</figcaption>
            </motion.figure>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="promote">
        <h1>Styles for <a>all sneakers</a> lovers</h1>
        <div onClick={shopNow}>
          Shop now <FaLongArrowAltRight className="icon" />
        </div>
      </div>
    </Container>
  );
};

export default BigShoe;
