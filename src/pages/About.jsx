import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#111827] text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* About Paragraphs */}
        <motion.p
          className="text-lg text-slate-600 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I’m a dedicated <span className="font-semibold text-blue-600">Full-Stack Developer</span> with a strong passion for building scalable, user-focused web applications. I enjoy turning complex problems into clean, intuitive solutions that users genuinely enjoy.
        </motion.p>

        <motion.p
          className="text-lg text-slate-600 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Over the years, I’ve continuously invested in self-development, sharpening my skills in JavaScript, Python, and modern frameworks used in real-world production environments. I focus on writing maintainable, readable code and designing systems that scale.
        </motion.p>

        <motion.p
          className="text-lg text-slate-600 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          I have hands-on experience building and delivering frontend and backend solutions for personal projects and client work. My goal is to contribute to meaningful products while growing as a developer in collaborative, forward-thinking teams.
        </motion.p>

        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          View Resume
        </motion.a>
      </div>
    </section>
  );
}
