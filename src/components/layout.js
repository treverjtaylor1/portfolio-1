import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <motion.div
    initial={{ x: 300, opacity: 1 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 130,
    }}
  >
    {children}
  </motion.div>
);
export default Layout;