import { motion } from 'framer-motion';
import { DashLoading } from 'respinner';

export default function Loading() {
  return (
     <div className="flex min-h-screen items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0f1b] to-black" />
         <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl animate-pulse" />
         <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
         <div className="absolute inset-0 backdrop-blur3xl" />
         <div className="absolute inset-0 opacity-20">
         <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-white animate-ping" />
         <div className="absolute right-1/3 top-1/2 h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
         <div className="absolute bottom-1/4 left-1/2 h-2 w-2 rounded-full bg-purple-400 animate-ping" />
        </div>
        <div className="relative flex flex-col items-center">
          <DashLoading color="#3FFF00" size={50}/>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-3xl font-black tracking-[0.3em] text-white"
          >
            xG R I D
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-3 text-sm uppercase tracking-[0.3em] text-gray-500"
          >
            Wait a sec ...
          </motion.p>
        </div>
      </div>
  );
  }