import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollTop(){

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibillity = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", toggleVisibillity);

        return () => {
            window.removeEventListener("scroll", toggleVisibillity);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return(
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50
                    rounded-full p-4
                    backdrop-blur-md
                    bg-white/10
                    border border-white/20
                    shadow-xl
                    transition-all duration-300
                    hover:scale-110
                    hover:bg-emerald-500
                    text-white cursor-pointer
                ${
                    visible
                    ? "translate-y-0 opcacity-100"
                    : "pointer-events-none translate-y-10 opacity-0"
                }
                bg-emerald-500 text-white hover:scale-110 hover:bg-emerald-500`}
                aria-label="Scroll to top"
        >
            <ChevronUp size={24} />
            </button>
    );
}