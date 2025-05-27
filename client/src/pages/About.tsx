import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code, Server, Cloud } from "lucide-react";
import { type Skill } from "@/lib/types";

const skills: Skill[] = [
  { name: "React/Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "Node.js", level: 88, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "backend" },
  { name: "GraphQL", level: 80, category: "backend" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "Git/GitHub", level: 95, category: "tools" },
];

const skillCategories = [
  {
    category: "frontend" as const,
    title: "Frontend",
    icon: Code,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description: "Building responsive and interactive user interfaces",
  },
  {
    category: "backend" as const,
    title: "Backend",
    icon: Server,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    description: "Scalable APIs and server-side solutions",
  },
  {
    category: "tools" as const,
    title: "Tools & DevOps",
    icon: Cloud,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description: "Development tools and deployment solutions",
  },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="skill-bar bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
        />
      </div>
    </div>
  );
}

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A passionate developer with 5+ years of experience building scalable web applications
            and contributing to open source projects.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800"
              alt="Alex Chen - Professional developer portrait"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Full Stack Developer</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a dedicated full-stack developer with expertise in modern web technologies.
              I love creating seamless user experiences and robust backend systems that scale.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              When I'm not coding, you'll find me contributing to open source projects,
              writing technical blogs, or exploring the latest in web development trends.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-purple-500 mb-2">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Technical Skills</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const categorySkills = skills.filter(skill => skill.category === category.category);
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.category}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className="glass-morphism rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-center">{category.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 text-center">
                    {category.description}
                  </p>
                  <div>
                    {categorySkills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        delay={categoryIndex * 200 + skillIndex * 100}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
