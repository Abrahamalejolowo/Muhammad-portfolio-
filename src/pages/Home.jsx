import { motion } from "framer-motion";
import SocialIcon from "./SocialIcon";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope,FaTwitter, } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const roles = [
    "Full-Stack Developer",
    "Frontend Engineer",
    "Backend Developer",
  ];

  const aboutParagraphs = [
    "I’m a dedicated Full-Stack Developer with a strong passion for building scalable, user-focused web applications. I enjoy turning complex problems into clean, intuitive solutions that users genuinely enjoy.",
    "Over the years, I’ve continuously invested in self-development, sharpening my skills in JavaScript, Python, and modern frameworks used in real-world production environments. I focus on writing maintainable, readable code and designing systems that scale.",
    "I have hands-on experience building and delivering frontend and backend solutions for personal projects and client work. My goal is to contribute to meaningful products while growing as a developer in collaborative, forward-thinking teams.",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative m px-6 pt-36 pb-24">
        {/* Animated background blobs */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <motion.p
              className="text-slate-600 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Hello, I’m
            </motion.p>

            <motion.h1
              className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#1d438a] to-sky-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Muhammad Muhideen
            </motion.h1>

            {/* DYNAMIC ROLE */}
            <motion.p
              key={roleIndex}
              className="mt-6 text-xl md:text-2xl font-semibold text-slate-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {roles[roleIndex]}
            </motion.p>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-slate-600 leading-relaxed">
              I build scalable, production-ready web applications with modern
              technologies and a strong focus on clean architecture & UX.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <a  href="#contact" className="px-7 py-3 rounded-xl bg-[#1d438a] text-white font-medium shadow-lg hover:scale-105 transition">
                Contact Me
              </a>
              <a href="/resume.pdf" className="px-7 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition">
                Download Resume
              </a>
            </div>

            {/* SOCIALS */}
            <motion.div
              className="mt-12 flex justify-center lg:justify-start gap-7"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <SocialIcon icon={FaEnvelope} link="https://gmail.com/in/imammuhammadmuhideen@gmail.com" label="Email" />
              <SocialIcon icon={FaGithub} link="https://github.com/mohman8" label="GitHub" />
             <SocialIcon icon={FaTwitter} link="https://twitter.com/@awwal_011" />
              <SocialIcon icon={FaLinkedin} link="https://linkedin.com/muhammadmuhideen" label="LinkedIn" />
              <SocialIcon icon={FaInstagram} link="https://instagram.com/muhammadmuhideen" label="Instagram" />
            </motion.div>
          </div>

          {/* RIGHT – TECH ORBIT */}
          <motion.div
            className="hidden lg:flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-72 h-72 rounded-full border border-blue-300/40 flex items-center justify-center relative">
              <motion.div
                className="absolute w-10 h-10 bg-[#1d438a] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "140px 140px" }}
              />
              <span className="text-blue-600 font-semibold">⚡ Developer</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py- px-6 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#111827] text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          {aboutParagraphs.map((para, idx) => (
            <motion.p
              key={idx}
              className="text-lg text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.2 }}
            >
              {para}
            </motion.p>
          ))}

          <motion.a
            href="/resume.pdf"
            target="_blank"
            className="inline-block mt-6 px-6 py-3 bg-[#1d438a] text-white rounded-lg font-medium hover:bg-blue-700 transition"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            
            View Resume
          </motion.a>
        </div>
      </section>
    </div>
  );
}
