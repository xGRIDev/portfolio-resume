import { motion } from "framer-motion";

export function Education()
{
    return (
        <section className="px-6 py-20 md:px-16 lg:px-32">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Journey
          </p>
          <h2 className="mt-2 text-4xl font-black">Education</h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-cyan-400 md:left-1/2" />

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative md:w-1/2 md:pr-10"
            >
              <div className="absolute left-0 top-8 h-4 w-4 rounded-full bg-purple-500 shadow-[0_0_20px_#a855f7] md:left-auto md:right-[-8px]" />

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <span className="rounded-full bg-purple-500/20 px-4 py-1 text-sm font-medium text-purple-300">
                  2018 - 2026
                </span>

                <h3 className="mt-5 text-2xl font-black text-white">
                  Bachelor of Computer Science
                </h3>

                <p className="mt-2 text-lg text-cyan-400">
                  Universitas Pakuan Bogor
                </p>

                <p className="mt-5 leading-7 text-gray-400">
                  Focused on frontend development, Back-End Programming, and modern web
                  technologies while building creative digital products.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative md:ml-auto md:w-1/2 md:pl-10"
            >
              <div className="absolute left-0 top-8 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] md:left-[-8px]" />

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <span className="rounded-full bg-cyan-400/20 px-4 py-1 text-sm font-medium text-cyan-300">
                  2014 - 2017
                </span>

                <h3 className="mt-5 text-2xl font-black text-white">
                  Rekayasa Perangkat Lunak
                </h3>

                <p className="mt-2 text-lg text-purple-400">
                  SMKN 1 Ciomas Bogor
                </p>

                <p className="mt-5 leading-7 text-gray-400">
                  Learned Basic Programming.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
}