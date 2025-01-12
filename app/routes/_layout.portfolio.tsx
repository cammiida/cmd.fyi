import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  color: string;
};
const projects: Project[] = [];

export default function Portfolio() {
  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-yellow-300">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${project.color} rounded-lg shadow-lg overflow-hidden`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-100">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
