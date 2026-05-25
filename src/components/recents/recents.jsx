import { motion } from 'framer-motion';
import { useState } from 'react';
import ss from '../../assets/3.png';

export function Recents() {

  const [projectType, setProjectType] = useState('Current');
    const projects = [
         {
          title: 'PUBGM-Leaderboard-C9S27Season',
          description: 'This project are made by me that provides real-time updates and insights into the PUBG Mobile C9S27 season leaderboard. It allows users to track their rankings, view detailed statistics, and analyze their performance throughout the season.',
          tech: ['Golang', 'Gin'],
          image:
            'https://raw.githubusercontent.com/xGRIDev/PUBGM-C9S27-LEADERBORD/master/media/lb-ss.jpg',
          category: 'Backend - Study Case',
          type: 'Personal',
        },
        {
          title: 'SIPBG - Sistem Informasi Pembangunan & Gedung',
          description: 'When I was insternship at PT.RealMediaLabs, having participated in the development of SIPBG, a web-based application designed to spatially visualize data and mapping.',
          tech: ['Laravel', 'PostgreSQL', 'Html', 'CSS'],
          image:
            'https://gitlab.com/ZufarNaufal/kp/-/raw/master/screenshot/2.PNG',
          category: 'Internship',
          type: 'Current',
        },
        {
          title: 'Nwave-Weather',
          description: 'This case own build based on Golang and Gin .',
          tech: ['Golang', 'Gin'],
          image:
            'https://images.unsplash.com/photo-1705077296278-d82dd5c8662f?q=80&w=809&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          category: 'Backend - Study Case',
          type: 'Personal',
        },
        {
          title: 'SICUKIL - Sistem Informasi Cukai Illegal',
          description: 'This Project are based on Laravel and PostgreSQL, this project is a web-based application designed to spatially visualize data and mapping.',
          tech: ['Laravel', 'PostgreSQL', 'JavaScript', 'Html', 'CSS'],
          image:
            ss,
          category: 'Current Project',
          type: 'Current',
        },
      ];

  const filteredProjects = projects.filter(
    (project) => project.type === projectType
  );

    return (
        <div className="recents-section">
            <h2 className="text-3xl font-bold text-white mb-8">
                Recent Projects 
            </h2>
            <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Portfolio
            </p>
            <h2 className="mt-2 text-4xl font-black">Contributed</h2>
          </div>
          <div className="flex w-fit items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
            <button
              onClick={() => setProjectType('Current')}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition cursor-pointer ${
                projectType === 'Current'
                  ? 'bg-cyan-800 text-white-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Current Projects
              </button>
              <button
              onClick={() => setProjectType('Personal')}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition cursor-pointer ${
                projectType === 'Personal'
                  ? 'bg-cyan-800 text-white-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Personal Projects
              </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-yellow-500/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-4 py-1 text-sm font-medium text-white backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black text-white transition group-hover:text-yellow-400">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button className="rounded-2xl bg-purple-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-400 cursor-pointer">
                    View Project
                  </button>

                  <div className="text-sm text-gray-500">
                    2026
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
    )
}