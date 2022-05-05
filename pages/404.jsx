import Head from "next/head";
import { Container } from "../styles/404";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <Container>
      <Head>
        <title>Page not found</title>
      </Head>
      <div className="view">
        <h3>Page not found</h3>
        <motion.h1
          className="message"
          transition={{
            y: { duration: 0.6, yoyo: Infinity, ease: "easeOut" },
            x: { duration: 0.6, yoyo: Infinity, ease: "easeOut" },
          }}
          animate={{ y: ["120%", "-120%"] }}
          drag={true}
          whileTap={{ cursor: "grabbing" }}
          whileHover={{ cursor: "grab" }}
        >
          404
        </motion.h1>
      </div>
    </Container>
  );
};

export default NotFound;
