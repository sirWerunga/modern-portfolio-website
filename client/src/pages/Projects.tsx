import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management platform with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    technologies: ["Vue.js", "Firebase", "Socket.io", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts, animated weather icons, and detailed meteorological data visualization.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Chart.js", "OpenWeather API", "PWA"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "4",
    title: "React UI Library",
    description: "Open source React component library with 50+ components, TypeScript support, and comprehensive documentation. 2k+ GitHub stars.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "TypeScript", "Storybook", "Rollup"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "5",
    title: "AI Chat Assistant",
    description: "Intelligent chat application powered by OpenAI GPT, featuring context-aware conversations, file uploads, and custom AI personalities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "OpenAI", "Prisma", "Vercel"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "6",
    title: "Portfolio Website",
    description: "This very website! Built with modern web technologies, featuring smooth animations, dark mode, and responsive design across all devices.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const githubStats = [
  { label: "Repositories", value: "127" },
  { label: "Contributions", value: "2.4k" },
  { label: "Followers", value: "94" },
];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const featuredProject = projects.find(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            My Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A collection of my latest work, from open source contributions to personal projects
            that showcase my skills and passion for development.
          </motion.p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Project</h3>
            <Card className="overflow-hidden glass-morphism">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <Github className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-3" />
                    <h4 className="text-2xl font-bold">{featuredProject.title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {featuredProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button asChild>
                      <a href={featuredProject.liveUrl}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={featuredProject.githubUrl}>
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={featuredProject.image}
                    alt={`${featuredProject.title} - Modern project interface`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {regularProjects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="project-card glass-morphism overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - Project interface`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">GitHub Activity</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {githubStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
