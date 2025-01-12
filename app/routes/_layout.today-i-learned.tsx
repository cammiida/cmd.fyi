import { motion } from "framer-motion";

type TIL = {
  title: string;
  content: string;
};

const tilItems: TIL[] = [];

export default function AuthRegister() {
  return (
    <motion.section
      id="today-i-learned"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-yellow-300">
        Today I Learned
      </h2>
      {tilItems.map((item) => (
        <motion.div
          key={item.title}
          className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-yellow-200">
            {item.title}
          </h3>
          <p className="text-gray-100">{item.content}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}
