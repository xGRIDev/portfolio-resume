import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Loading({ finishLoading }) {

  const loaderRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: finishLoading,
    });

    tl.from(".loader-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
    .to(".loader-bar", {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
    })
    .to(loaderRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut",
    });
  })

  return (
     <div
        ref={loaderRef}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
     >
      <h1 className="loader-text text-5xl font-black text-white">
        x G R I D
      </h1>
    <div className="mt-8 h-[2px] w-64 bg-zinc-800 overflow-hidden">
      <div className="loader-bar h-full w-0 bg-emerald-500"/>
    </div>
     </div>
  );
  }