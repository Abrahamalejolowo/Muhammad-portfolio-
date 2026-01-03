import { projects } from "../data/Database";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-[#111827] mb-12 text-center">
          Projects
        </h3>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-xl p-6 border hover:shadow-lg transition cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {project.img && (
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}

              <h4 className="font-semibold text-lg mb-2 text-[#111827]">
                {project.title}
              </h4>

              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-slate-100 text-slate-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 text-[#2563EB] font-medium items-center">
                <SocialIcon icon={FaGithub} link={project.github} />
                <SocialIcon icon={FaExternalLinkAlt} link={project.live} />
              </div>
            </motion.div>
          ))}
        </div>
        <div>
          <a href="https://github.com/mohman8" className="font-bold ">See more</a>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ icon: Icon, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.25, y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="text-black text-2xl sm:text-3xl cursor-pointer"
    >
      <Icon />
    </motion.a>
  );
}
