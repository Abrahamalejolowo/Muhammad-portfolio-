import { Send } from "lucide-react";
import { motion } from "framer-motion";

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20  bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center">{title}</h2>
        <p className="text-gray-600 mb-10">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`bg--[#F8FAFC] rounded-2xl shadow p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const res = await fetch("https://formspree.io/f/xbdlgojp", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        alert("Thanks! I’ll get back to you soon.");
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again later.");
      console.error(err);
    }
  };

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let’s build something impactful together."
      className=""
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="max-w-4xl mx-auto bg-[#F8FAFC]">
          <form className="grid gap-5 text-left" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-gray-300 px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-xl border border-gray-300 px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-gray-300 px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full rounded-xl border border-gray-300 px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 
                         rounded-full bg-[#1d438a] text-white px-6 py-3 
                         font-medium  hover:bg-blue-700 transition"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </Card>
      </motion.div>
    </Section>
  );
}

