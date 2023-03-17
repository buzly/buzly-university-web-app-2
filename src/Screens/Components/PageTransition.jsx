import { motion } from "framer-motion";

const opacityTransition = {
  initial: {
    opacity: 0,
    // scale: 0,
  },
  animate: {
    opacity: 1,
    // scale: 1,
  },
  exit: {
    opacity: 0,
    // scale: 0,
  },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      className="page"
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
      variants={opacityTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
export default PageTransition;
