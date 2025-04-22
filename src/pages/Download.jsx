import heroImage from "../assets/mainImage.png"
import { motion } from "framer-motion"
import Footer from "../components/Footer"

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


const Download = () => {


    return (
        <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-20 lg:pt-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
                <motion.h1 
                variants={fadeInUp}
                className="font-abril text-5xl lg:text-8xl my-4 lg:my-8
                bg-gradient-to-b from-customWhite via-customWhiteHover 
                to-neutral-700 bg-clip-text text-transparent">
                    <span className="text-2xl lg:text-5xl"> - Thank you for choosing - </span> 
                    <br />
                    <span className="">Womanpreneur</span>
                    <br />
                    <span className="">Mindset for Success</span>
                </motion.h1>

                <motion.div 
                variants={fadeInUp}
                className="mt-6 space-x-4">
                    <a 
                        href="/files/WomanPreneur_Mindset_for_Success.zip"
                        download
                        className="inline-block bg-customWhite hover:bg-customWhiteHover shadow-lg shadow-transparent hover:shadow-customWhiteHover/50
                        text-customBlack py-4 px-11 rounded-lg font-medium transition animate-bounce"
                    >
                        Download the Book
                    </a>
                </motion.div>

                <motion.p 
                variants={fadeInUp}
                className="mt-6 text-customWhite/60 max-w-xl">
                    You’ve just taken a powerful step toward yourself. May this book be your support, your inspiration, and your guiding light on the journey to your best self.
                    <br />
                    🌿 Enjoy the read — and your personal growth. We’re with you, every step of the way.
                </motion.p>
                
                {/* HERO IMAGE */}               
                <motion.div 
                    variants={fadeIn}
                    className="mt-12 w-full rounded-3xl border border-neutral-800 overflow-hidden group transition-all duration-300 ease-in-out">
                    <a href="#">
                        <img 
                            src={heroImage} 
                            alt="Streamer SaaS Interface" 
                            className="w-full h-auto object-cover object-center group-hover:scale-110 transition-all duration-300 ease-in-out"
                        />
                    </a>
                </motion.div>
            </div>
            <Footer />
        </motion.section>
    )
}

export default Download