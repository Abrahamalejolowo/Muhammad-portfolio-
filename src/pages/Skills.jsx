  import { frontendSkills } from "../data/Database";
  import { backendSkills } from "../data/Database";
  import { motion } from "framer-motion";

  export default function Skills() {
    return (
      <section id="skills" className="py-10 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-12 text-center">
          Skills
        </h1>
          {/* Frontend */}
          <h2 className="text-2xl font-semibold text-center mb-10 italic underline">
            Frontend
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-20">
            {frontendSkills.map((skill) => {
              const Icon = skill.icon;
              return <SkillCard key={skill.name} Icon={Icon} name={skill.name} />;
            })}
          </div>

          {/* Backend */}
          <h2 className="text-2xl font-semibold text-center mb-10 italic underline">
            Backend
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {backendSkills.map((skill) => {
              const Icon = skill.icon;
              return <SkillCard key={skill.name} Icon={Icon} name={skill.name} />;
            })}
          </div>
        </div>
      </section>
    );
  }

  function SkillCard({ Icon, name }) {
    return (
      <motion.div
        whileHover={{ y: -7, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className=" rounded-xl p-6 flex flex-col items-center gap-4 shadow-md cursor-pointer"
      >
        <Icon className="text-5xl text-black" />
        <p className="text-sm font-medium">{name}</p>
      </motion.div>
    );
  }
