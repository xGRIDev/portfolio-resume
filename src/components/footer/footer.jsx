
export default function footer(){
    return (
        <div className="border-t border-gray-800 py-10">
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Zufar Naufal - xG R I D. All rights reserved.
                </p>
            </div>
        </div>
    )
}