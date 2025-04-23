import { HERO_CONTENT } from "../constants"
import heroImage from "../assets/mainImage.png"
import frameImg from "../assets/frame.png"
import presentation from "../assets/Presentation.mp4"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion";
import { useContext, useRef } from "react"
import { PageContext } from "../context/PageContext"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { straggerChildren: 0.2 }},
}

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 }}, 
}

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 }},
}


const HeroSection = () => {

    const videoRef = useRef();
    const { showDemo, setShowDemo, isVideoLoading, setIsVideoLoading } = useContext(PageContext);

    return (
        <motion.section
        id="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-28 lg:pt-36">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
                <motion.div 
                variants={fadeInUp}
                className="text-customWhite/60 px-3 py-2 rounded-full text-xs">
                    {HERO_CONTENT.badgeText}
                </motion.div>
                <motion.h1 
                variants={fadeInUp}
                className="font-abril text-5xl lg:text-8xl my-4 lg:my-8
                bg-gradient-to-b from-customWhite via-customWhiteHover 
                to-neutral-700 bg-clip-text text-transparent">
                    {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
                        <span key={index}>
                            {text}
                            <br />
                        </span>
                    ))}
                </motion.h1>

                <motion.p 
                variants={fadeInUp}
                className="mt-6 text-customWhite/60 max-w-xl">
                    {HERO_CONTENT.subHeading}
                </motion.p>
                <motion.div 
                variants={fadeInUp}
                className="mt-6 space-x-4">
                    <a href="https://buy.stripe.com/28o8xF5276Nd35K7ss" target="_blank" rel="noopener noreferrer" className="inline-block bg-customWhite hover:bg-customWhiteHover shadow-lg shadow-transparent hover:shadow-customWhiteHover/50
                    text-customBlack py-3 px-5 rounded-lg font-medium transition">
                        {HERO_CONTENT.callToAction.primary}
                    </a>
                    <button
                        onClick={() => {
                            setShowDemo(!showDemo); 
                            setIsVideoLoading(true); // Show spinner when video is loading}}
                        }}
                        className="inline-block border border-gray-500 hover:border-gray-400
                        text-white py-3 px-5 rounded-lg font-medium transition"
                    >
                        {HERO_CONTENT.callToAction.secondary}
                    </button>
                </motion.div>

                <motion.p 
                    variants={fadeInUp}
                    className="mt-6 text-customWhite/60 max-w-xl tracking-wide">
                    PDF-format. Ready to read. Ready to print. Always with you
                </motion.p>
                

                {/* video*/}
                <AnimatePresence>
                    {showDemo && (
                        <motion.div
                            onClick={() => setShowDemo(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 h-screen w-screen bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm"
                        >
                            <motion.div
                                onClick={(e) => e.stopPropagation()}
                                initial={{ opacity: 0 }}
                                animate={{ scaleX: 1.2, scaleY: 1.05, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative h-[120vw] lg:h-[40vw] w-auto flex items-center justify-center overflow-hidden scale-y-[85%]"
                            >
                                {/* Spinner while loading */}
                                {isVideoLoading && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 z-10 rounded-[5vw] lg:rounded-[1vw]">
                                        <p className="font-abril text-customWhite text-lg lg:text-2xl animate-spin">W</p>
                                        {/* <div className="w-8 h-8 border-4 border-customWhite/50 border-t-transparent rounded-full animate-spin"></div> */}
                                    </div>
                                )}
                                <div className="overflow-hidden relative z-10 h-full">
                                    <img src={frameImg} alt="frame" className="h-full" />
                                </div>
                                <div className="absolute w-full scale-x-[91%] scale-y-110 rounded-[5vw] lg:rounded-[1vw] overflow-hidden">
                                    <video
                                        playsInline
                                        preload="none"
                                        muted
                                        autoPlay
                                        loop
                                        ref={videoRef}
                                        onLoadedData={() => setIsVideoLoading(false)} // Hide spinner when video is loaded
                                        className={`pointer-events-none ${isVideoLoading ? "hidden" : "block"}`}
                                    >
                                        <source src={presentation} type="video/mp4" />
                                    </video>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* HERO IMAGE */}               
                <motion.div 
                    variants={fadeIn}
                    className="mt-12 mb-12 w-full rounded-3xl border border-neutral-800 overflow-hidden group transition-all duration-300 ease-in-out">
                    <a href="https://buy.stripe.com/28o8xF5276Nd35K7ss" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={heroImage} 
                            alt="WomanPreneur Mindset for Success" 
                            className="w-full h-auto object-cover object-center group-hover:scale-110 transition-all duration-300 ease-in-out"/>
                    </a>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default HeroSection