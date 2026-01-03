import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";



export default function App() {
  return (
    <div className="bg-gradient-to-b from-white">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}