import {
  // FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer id="contact" className="py-10 border-t  bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} muhammad Muhideem</p>
        <div className="space-x-4 flex">
          <SocialIcon icon={FaGithub} link="https://github/" />
          <SocialIcon icon={FaWhatsapp} link="https://wa.me/2349134809312" />
          <SocialIcon icon={FaTwitter} link="https://twitter.com/@awwal_011" />
          <SocialIcon
            icon={FaEnvelope}
            link="https://gmail.com/in/imammuhammadmuhideen@gmail.com"
          />
        </div>
      </div>
    </footer>
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
