import { TypeAnimation } from "react-type-animation";
import profileImg from "../../assets/DDD00162.jpg";

export function hero() {
  return (
    <div className="hero">
     <section className="relative overflow-hidden px-6 py-24 md:px-16 lg:px-32 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 via-transparent to-emerald-800/20 blur-3xl" />

        <div className="relative z-10 max-w-5xl">
          <div data-aos="fade-right">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Creative Developer & Designer
          </p>
          </div>
          
          <div data-aos="fade-up" data-aos-duration={1400}>
            <h1 className="text-5xl font-black leading-tight md:text-5xl">
              Hi, I’m <span className="text-teal-600">Zufar Naufal</span>
            </h1>
          </div>
          <div data-aos="fade-right">
          <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-3xl">
          <TypeAnimation
            sequence={[
              "Focused & Insight Of Web-Development include (front-end / back-end) and RESTFul API",
              1000
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
            </p>
          </div>  
          <div className="mt-10 flex flex-wrap gap-4">
            <div data-aos="fade-right">
            <button className="rounded-2xl bg-sky-500 px-6 py-3 font-semibold transition hover:scale-105 hover:bg-slate-600 cursor-pointer">
              View Projects
            </button>
            </div>
            <div data-aos="fade-left">
              <button className="rounded-2xl border border-gray-700 px-6 py-3 font-semibold transition hover:border-purple-400 hover:text-purple-400 cursor-pointer">
              Contact Me
            </button>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
         <div className="relative px-4 lg:px-30 py-5 mt-10 flex justify-center lg:justify-end">
            <div className="absolute h-80 w-80 rounded-full bg-purple-600/30 blur-3xl" />

            <img
              src={profileImg}
              alt="Profile"
              className="relative z-10 w-full max-w-[340px] rounded-[2rem] border border-gray-800 object-cover shadow-2xl"
            />
          </div>
          </div>
      </section>
    </div>
  );
}