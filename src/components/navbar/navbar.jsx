import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, Download } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [ open, setOpen] = useState(false);

    return (
        <div className="navbar">
           <div className="fixed left-1/2 top-6 z-50 w-full max-w-5xl -translate-x-1/2 px-4">
        <nav className="rounded-full border border-white/10 bg-black/40 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between px-6 py-4 md:px-10">
            <h1 className="text-2xl font-black tracking-wide text-white">
              xGRID.
            </h1>

            <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 md:flex">
              <a
                href="#home"
                className="rounded-full px-5 py-2 text-sm font-medium text-gray-300 transition hover:bg-purple-500 hover:text-white"
              >
                Home
              </a>

              <a
                href="#about"
                className="rounded-full px-5 py-2 text-sm font-medium text-gray-300 transition hover:bg-purple-500 hover:text-white"
              >
                About
              </a>

              <a
                href="#projects"
                className="rounded-full px-5 py-2 text-sm font-medium text-gray-300 transition hover:bg-purple-500 hover:text-white"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="rounded-full px-5 py-2 text-sm font-medium text-gray-300 transition hover:bg-purple-500 hover:text-white"
              >
                Contact
              </a>
            </div>

            {/* Resume Button */}
            <div className="hidden md:block">
              <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-800 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 cursor-pointer">
                Resume
                <Download size={16}/> 
              </button>
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
                href="#home"
                className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-gray-300 transition hover:bg-purple-500 hover:text-white"
              >
                <Home size={18} /> Home
              </a>

              <a
                href="#about"
                className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-gray-300 transition hover:bg-purple-500 hover:text-white"
              >
                <User size={18} /> About
              </a>

              <a
                href="#projects"
                className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-gray-300 transition hover:bg-purple-500 hover:text-white"
              >
                <Briefcase size={18} /> Projects
              </a>

              <a
                href="#contact"
                className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-gray-300 transition hover:bg-purple-500 hover:text-white"
              >
                <Mail size={18} /> Contact
              </a>
            </div>
          </motion.div>
        </nav>
      </div>
        </div>
    );
   
}