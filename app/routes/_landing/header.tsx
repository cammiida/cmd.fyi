import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg sticky top-0 z-10">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-4 flex"
      >
        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <NavLink
            to="/"
            className="flex justify-center space-x-6 font-bold text-xl text-yellow-300"
          >
            CMD
          </NavLink>
        </motion.span>
        <motion.ul className="flex justify-center items-center space-x-6 w-full">
          {["Today I Learned", "Portfolio"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `text-white hover:text-yellow-300 transition-colors duration-200 ${
                    isActive ? "text-yellow-300" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </header>
  );
}
