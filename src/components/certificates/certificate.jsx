import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';


export default function Certificate(){
    const cardRef = useRef([]);
    const modalRef = useRef(null);
    const overlayRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);
    useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".certificates-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  //Modal-View Certi
  const openModal = () => {
    if (!modalRef.current || !overlayRef.current) return;
    gsap.set([modalRef.current, overlayRef.current], {
      display: "flex",
    });

    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );

    gsap.fromTo(
      modalRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      }
    );
  };

  const closeModal = () => {
     gsap.to(modalRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.in",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        gsap.set([modalRef.current, overlayRef.current], {
          display: "none",
        });
      },
    });
  };

    const certificates = [
        {
            title: "UDEMY",
            Batch: "Full-Stack Development [React / Next JS / Node Js]",
            image: "/certi/certi-1.png",
            issued: "Udemy Course",
        },
        {
            title: "UDEMY",
            Batch: "Go-Lang Fundamental",
            image: "/certi/certi-2.png",
            issued: "Udemy Course"
        },
        {
            title: "Dicoding Indonesia",
            Batch: "Memulai Dasar PEmrograman untuk Menjadi Pengembang Software",
            image: "/certi/certi-3.png",
            issued: "Dicoding Indonesia",
        },
    ]
    return (
          <section className="certificates-section py-24 px-6 md:px-16 lg:px-32">
      <div className="mb-12">
        <p className="uppercase tracking-[0.3em] text-gray-500">
          Achievements
        </p>

        <h2 className="text-4xl font-black mt-2">
          Certificates
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-3xl border border-gray-800 bg-white/5 backdrop-blur"
          >
            <div className="overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">
                {cert.title}
              </h3>


              <button  onClick={() => {
                    setSelectedCert(cert);
                    setIsOpen(true);
                    openModal();
                    }} 
                    className="mt-6 rounded-xl border border-purple-500 px-4 py-2 text-sm font-medium transition hover:bg-purple-500">
                View Certificate
              </button>
      
            </div>
          </div>
        ))}
        {/* Overlay */}
        {isOpen && (
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 hidden items-center justify-center bg-black/70 backdrop-blur-sm"
      >
        {/* Modal */}
        <div
          ref={modalRef}
          className="relative w-[95vw] max-w-6xl rounded-3xl bg-zinc-900 p-8"
        >
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 text-xl text-gray-400 hover:text-white"
          >
            ✕
          </button>
        <div className="grid gap-8 lg:grid-cols-1">
            <div>
                <img
                    src={selectedCert?.image}
                    alt="Certificate"
                    className="w-full rounded-2xl"
                />

            </div>
        </div>
        <div className="flex flex-col justify-center px-10">

        <span className="mb-3 inline-flex w-fit rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400">
          {selectedCert?.title}
        </span>

        <h2 className="text-4xl font-bold">
          {selectedCert?.Batch}
        </h2>

        <p className="mt-4 leading-8 text-gray-400">
          {selectedCert?.issued}
        </p>
        </div>

        </div>
      </div>
              )}
      </div>
    </section>
    )
    
}