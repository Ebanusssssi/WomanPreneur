import { useContext, useEffect, useState } from "react"
import logo from "../assets/logo.png"
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { PageContext } from "../context/PageContext";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [showBuyButton, setShowBuyButton] = useState(false); // State for "Buy the book" button visibility

    const { showDemo, setShowDemo, setIsVideoLoading } = useContext(PageContext);
    

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    useEffect(() => {
        const secondSection = document.querySelector("#hero"); // Adjust the selector to match your second section's ID
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowBuyButton(!entry.isIntersecting);
            },
            { threshold: 0 } // Adjust threshold as needed
        );

        if (secondSection) {
            observer.observe(secondSection);
        }

        return () => {
            if (secondSection) {
                observer.unobserve(secondSection);
            }
        };
    }, []);

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 m-2">
            <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
                {/* left: logo */}
                <a href="#hero"><img src={logo} alt="Womanpreneur logo" className="cursor-pointer w-8 md:w-12"/></a>

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

                {/* Center: "Buy the book" button (conditionally rendered with smooth transition) */}
                <div
                    className={`flex md:hidden transition-opacity duration-500 ${
                        showBuyButton ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                >
                    <a
                        href="https://buy.stripe.com/28o8xF5276Nd35K7ss"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="bg-customBlack/60 text-customWhite font-semibold py-2 px-4 rounded-lg hover:bg-customBlack/30 shadow-lg shadow-transparent hover:shadow-customWhiteHover/10 transition-all animate-pulse"
                    >
                        Buy the book
                    </a>
                </div>

                {/* Right: Buttons (hidden on mobile) */}
                <div className="hidden md:flex space-x-4 items-center">
                    <button
                        onClick={() => {
                            setShowDemo(!showDemo);
                            setIsVideoLoading(true); // Show spinner when video is loading
                        }}
                        className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition-colors"
                    >
                        Take a look
                    </button>
                    <a href="https://buy.stripe.com/28o8xF5276Nd35K7ss" target="_blank" rel="noopener noreferrer" className="bg-customWhite text-customBlack font-semibold py-2 px-4 rounded-lg hover:bg-customWhiteHover shadow-lg shadow-transparent hover:shadow-customWhiteHover/50 transition-all">
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
                        <a 
                            href="#works" 
                            className="hover:text-neutral-200 transition"
                            onClick={() => setIsOpen(false)} // Close menu after clicking
                        >
                            Book contents
                        </a>
                        <a 
                            href="#features" 
                            className="hover:text-neutral-200 transition"
                            onClick={() => setIsOpen(false)} // Close menu after clicking
                        >
                            Key features
                        </a>
                        <a 
                            href="#testimonials" 
                            className="hover:text-neutral-200 transition"
                            onClick={() => setIsOpen(false)} // Close menu after clicking 
                        >
                            Testimonials
                        </a>
                        <button
                            onClick={() => {
                                setShowDemo(!showDemo);
                                setIsOpen(false);
                                setIsVideoLoading(true); // Show spinner when video is loading
                            }}
                            className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition-colors"
                        >
                            Take a look
                        </button>
                        <a 
                            href="https://buy.stripe.com/28o8xF5276Nd35K7ss" 
                            rel="noopener noreferrer"
                            target="_blank" 
                            className="text-center bg-customWhite text-customBlack font-semibold py-2 px-4 rounded-lg hover:bg-customWhiteHover transition-colors"
                            onClick={() => setIsOpen(false)} // Close menu after clicking
                        >
                            Buy the book
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar