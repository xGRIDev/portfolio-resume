import { MdOutlineMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

export default function footer(){
    return (
        <div className="border-t border-gray-800 py-10">
            <div className="container mx-auto flex flex-col items-center">
                <div className="mb-6 flex gap-6">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition duration-300 hover:-translate-y-3 hover:text-purple-400"
                    >
                        <FiGithub size={24} />
                    </a>

                    <a
                        href="mail:example@example.com"
                        className="text-gray-400 transition duration-300 hover:-translate-y-3 hover:text-purple-400"
                    >
                        <MdOutlineMailOutline  size={24} />
                    </a>
                </div>
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Zufar Naufal - xG R I D. All rights reserved.
                </p>
            </div>
        </div>
    )
}