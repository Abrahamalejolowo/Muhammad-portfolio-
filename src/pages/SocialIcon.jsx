import { motion } from "framer-motion";

export default function SocialIcon({ icon: Icon, link, label }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -4, scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="text-2xl text-slate-500 hover:text-blue-600 transition"
    >
      <Icon />
    </motion.a>
  );
}
