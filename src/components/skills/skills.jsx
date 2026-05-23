import React from 'react';
import aos from 'aos';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaReact,FaLaravel } from 'react-icons/fa';
import { IoLogoNodejs } from "react-icons/io5";
import { DiPostgresql } from "react-icons/di";
import { BiLogoGoLang } from "react-icons/bi";




function SkillBar({ skill }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    return (
       <div
      ref={ref}
      className="group rounded-3xl border border-gray-800 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-purple-500"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="text-5xl text-white-400">
          {skill.icon}
        </div>
        <h3 className="text-xl font-bold text-white">
          {skill.name}
        </h3>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold text-purple-400"
        >
          {skill.progress}%
        </motion.span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-gray-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.progress}%` : 0 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
        />
      </div>
    </div>
    );
}

export function Skills() {
   

    const skills = [
        {
            name: 'JavaScript',
            progress: 80,
            icon: <IoLogoNodejs />,
        },
        {
            name: 'React',
            progress: 80,
            icon: <FaReact  />
        },
        {
            name: 'Laravel',
            progress: 85,
            icon: <FaLaravel  /> 
        },
        {
            name: 'PostgreSQL',
            progress: 75,
            icon: <DiPostgresql  />
        },
        {
            name: 'Golang',
            progress: 70,
            icon: <BiLogoGoLang  />
        }
    ];

    return (
        <div className="skills">
            <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Expertise
          </p>
          <h2 className="mt-2 text-4xl font-black">My Skills</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
        </div>
    )
}