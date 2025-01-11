import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4">
        <motion.ul
          className="flex justify-center space-x-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {["Today I Learned", "About Me", "Portfolio"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white hover:text-yellow-300 transition-colors duration-200"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
}
