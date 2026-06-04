import { motion } from 'framer-motion';
import { Menu, X, User, Briefcase, Download } from 'lucide-react';
import { SiReaddotcv } from "react-icons/si";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PiGraduationCap, PiReadCvLogoLight  } from "react-icons/pi";


export default function Navbar() {
    const [ open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
      const sections = document.querySelectorAll("section");
      const handleScroll = () => {
        let current = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 120;
          const sectionHeight = section.clientHeight;

          if (
            window.scrollY >= sectionTop &&
            window.scrollX < sectionTop + sectionHeight
          ) {
            current = section.getAttribute("id");
          }
        });
        
        if (current) {
          setActiveSection(current);
        }
      };
      
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <div className="navbar">
           <div className="fixed left-1/2 top-6 z-50 w-full max-w-5xl -translate-x-1/2 px-4">
        <nav className="rounded-full border border-white/10 bg-black/40 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between px-6 py-4 md:px-10">
            <h1 className="text-2xl font-black tracking-wide text-white">
              <SiReaddotcv size={40}/>
            </h1>

            <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 md:flex">
                <a
                  href="#projects"
                  className={`rounded-full px-5 py-2 text-sm font-medium transition
                    ${
                      activeSection === "projects"
                        ? "bg-sky-500 text-white"
                        : "text-gray-300 hover:bg-emerald-500 hover:text-white"
                    }`}
                >
                  Projects
                </a>

              <a
                href="#skills"
                className={`rounded-full px-5 py-2 text-sm font-medium transition
                  ${
                    activeSection === "skills"
                    ? "bg-sky-500 text-white"
                    : "text-gray-300 hover:bg-emerald-500 hover:text-white"
                  }`}
              >
                Skills
              </a>

              <a
                href="#educations"
                className={`rounded-full px-5 py-2 text-sm font-medium transition 
                  ${
                    activeSection === "educations"
                    ? "bg-sky-500 text-white"
                    : "text-gray-300 hover:bg-emerald-500 hover:text-white"
                  }`}
              >
                Education
              </a>
            </div>

            {/* Resume Button */}
            <div className="hidden md:block">
             <Link
              to="/resume"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-800 px-6 py-3"
            >
              Resume
            </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="rounded-full border border-white/10 bg-white/5 p-3 text-white md:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Floating Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: open ? 1 : 0,
              y: open ? 0 : -20,
              display: open ? 'block' : 'none',
            }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4 md:hidden"
          >
            <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-black/80 p-4 backdrop-blur-xl">
              <a
                href="#skills"
                className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-gray-300 transition hover:bg-emerald-500 hover:text-white"
              >
                <User size={18} /> Skills
              </a>

              <a
                href="#projects"
                className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-gray-300 transition hover:bg-emerald-500 hover:text-white"
              >
                <Briefcase size={18} /> Projects
              </a>

               <a
                href="#educations"
                className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-gray-300 transition hover:bg-emerald-500 hover:text-white"
              >
                <PiGraduationCap size={18} /> Educations
              </a>
              <a
                href="/resume"
                className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-gray-300 transition hover:bg-emerald-500 hover:text-white"
              >
                <PiReadCvLogoLight  size={18} /> Resume
              </a>
            </div>
          </motion.div>
        </nav>
      </div>
        </div>
    );
   
}