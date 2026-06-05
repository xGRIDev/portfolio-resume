import { gsap } from 'gsap';
import { useEffect } from 'react';
import  { MdArrowBackIosNew } from 'react-icons/md';
import profileImg from '../../assets/xgrd.jpeg';
import { IoCodeDownloadOutline } from "react-icons/io5";


export default function Resume() {

    useEffect(() => {
        gsap.from(".hero-title", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
        });

        gsap.from(".hero-text", {
            y: 100,
            opacity: 0,
            delay: 0.4,
            duration: 1,
        });

        gsap.to(".profile-card", {
            y: -15,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
       
    }, []);

    return  (
        <section className="min-h-screen flex flex-col items-center px-8 md:flex-row">
          <div>
            <div className="flex flex-col items-center px-10 md:flex-row mt-6">
              <a href="/" className="flex
              justify-center
              items-center
              gap-2
              mt-2
              py-2
              rounded-full
              font-semibold
              hover:scale-105
              transition-all">
                <MdArrowBackIosNew size={15}/>
                Back to Home
              </a>
            </div>
            <br />
            <span className="text-zinc-500 text-sm p-10 items-center">
              Intermediate Programmer
            </span>
            
            <div className="w-full md:w-1/2">
            <h1 className="hero-title text-7xl p-8 md:text-9xl font-black tracking-tight">
              Zufar
              <br />
              Naufal
            </h1>
            </div>

            <p className="hero-text mt-2 max-w-xl ml-10 text-zinc-600 text-lg">
              Common Useful Of Tect-Stack Front & Back End Develop Application
              for Digital Experience.
            </p>
          </div>
  <div className="profile-card">

    <div className="relative px-4 lg:px-30 py-2 mt-10 flex justify-center lg:justify-end">
          <div
            className="
            w-[380px]
            backdrop-blur-xl
            bg-white/5
            border border-white/10
            rounded-[40px]
            p-6
            shadow-2xl
            "
          >
            <img
              src={profileImg}
              alt="Zufar Naufal"
              className="
              w-full
              h-auto
              object-cover
              rounded-[50px]
              "
            />

            <a
              href="/docs/CV-ATS-ZUFARNAUFAL-NEW.pdf"
              download
              className="
              flex
              justify-center
              items-center
              gap-2
              mt-6
              py-4
              rounded-full
              bg-gradient-to-r
              from-emerald-500
              to-gray-800
              font-semibold
              hover:scale-105
              transition-all
              "
            >
              My Resume
              <IoCodeDownloadOutline size={30} />
            </a>
          </div>
        </div>

    </div>
  
</section>

    )
}