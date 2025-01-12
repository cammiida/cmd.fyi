import { motion } from "framer-motion";

export default function AboutMe() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Remix", "Tanstack Query", "Zod"],
    },
    { category: "Backend", items: ["Kotlin", "Node.js", "Java", ".NET"] },
    { category: "Cloud", items: ["AWS", "Terraform"] },
    { category: "DevOps", items: ["Docker", "GitHub Actions", "Circle CI"] },
  ];

  return (
    <motion.section
      id="about-me"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-yellow-300">About Me</h2>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <p className="text-gray-100 mb-6">
          I am a full-stack developer with a love for TypeScript, React, Remix,
          Kotlin, AWS, and Terraform. I love digging deep, building the
          &quot;right&quot; things, and solving complex problems with readable
          and easily understandable code. I strongly believe that a good
          programmer is not one that only solves complex problems, but manages
          to solve the right ones and make them simple.
        </p>
        <h3 className="text-2xl font-semibold mb-4 text-pink-100">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="bg-white bg-opacity-10 rounded-lg p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-2 text-yellow-200">
                {skillGroup.category}
              </h4>
              <ul className="list-disc list-inside text-gray-100">
                {skillGroup.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
