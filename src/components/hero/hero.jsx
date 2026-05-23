import { TypeAnimation } from "react-type-animation";
import profileImg from "../../assets/DDD00162.jpg";

export function hero() {
  return (
    <div className="hero">
     <section className="relative overflow-hidden px-6 py-24 md:px-16 lg:px-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-500/20 blur-3xl" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Creative Developer & Designer
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            Hi, I’m <span className="text-purple-400">Zufar Naufal</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-3xl">
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
            </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-purple-500 px-6 py-3 font-semibold transition hover:scale-105 hover:bg-purple-400">
              View Projects
            </button>

            <button className="rounded-2xl border border-gray-700 px-6 py-3 font-semibold transition hover:border-purple-400 hover:text-purple-400">
              Contact Me
            </button>
          </div>
        </div>
         <div className="relative px-4 lg:px-8 py-5 -mt-60 flex justify-center lg:justify-end">
            <div className="absolute h-80 w-80 rounded-full bg-purple-600/30 blur-3xl" />

            <img
              src={profileImg}
              alt="Profile"
              className="relative z-10 w-full max-w-[340px] rounded-[2rem] border border-gray-800 object-cover shadow-2xl"
            />
          </div>
      </section>
    </div>
  );
}