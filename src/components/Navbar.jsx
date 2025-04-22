import { useContext, useState } from "react"
import logo from "../assets/logo.png"
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { PageContext } from "../context/pageContext";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { showDemo, setShowDemo } = useContext(PageContext);
    

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="fixed top-4 left-0 right-0 z-50 m-2">
            <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
                {/* left: logo */}
                <img src={logo} alt="logo" className="cursor-pointer w-8 md:w-12"/>

                {/* Center: Links (hidden on mobile) */}
                <div className="hidden md:flex space-x-6 ">
                    <a href="#works" className="hover:text-neutral-200 transition-colors">
                        Book contents
                    </a>
                    <a href="#features" className="hover:text-neutral-200 transition-colors">
                        Key features
                    </a>
                    <a href="#testimonials" className="hover:text-neutral-200 transition-colors">
                        Testimonials
                    </a>
                </div>

                {/* Right: Buttons (hidden on mobile) */}
                <div className="hidden md:flex space-x-4 items-center">
                    <button
                        onClick={() => setShowDemo(!showDemo)}
                        className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition-colors"
                    >
                        Get Demo
                    </button>
                    <a href="https://buy.stripe.com/28o8xF5276Nd35K7ss" target="_blank" className="bg-customWhite text-customBlack font-semibold py-2 px-4 rounded-lg hover:bg-customWhiteHover shadow-lg shadow-transparent hover:shadow-customWhiteHover/50 transition-all">
                        Buy the book
                    </a>
                </div>

                {/* Hamburder Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} 
                            className="text-white focus:outline-none" 
                            aria-label={isOpen ? "Close Menu" : "Open Menu"}>
                            { isOpen ? <RiCloseFill /> : <RiMenu3Line />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-neutral-900/60 backdrop-blur-md 
                border border-neutral-800 p-4 rounded-xl mt-2">
                    <div className="flex flex-col space-y-4 ">
                        <a href="#works" className="hover:text-neutral-200 transition">
                            Book contents
                        </a>
                        <a href="#features" className="hover:text-neutral-200 transition">
                            Key features
                        </a>
                        <a href="#testimonials" className="hover:text-neutral-200 transition">
                            Testimonials
                        </a>
                        <button
                            onClick={() => {
                                setShowDemo(!showDemo);
                                setIsOpen(false);
                            }}
                            className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition-colors"
                        >
                            Get Demo
                        </button>
                        <a href="https://buy.stripe.com/28o8xF5276Nd35K7ss" target="_blank" className="text-center bg-customWhite text-customBlack font-semibold py-2 px-4 rounded-lg hover:bg-customWhiteHover transition-colors">
                            Buy the book
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar