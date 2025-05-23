import { motion } from "framer-motion"
import { TESTIMONIALS_CONTENT } from "../constants"

const Testimonials = () => {
    const testimonialVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    }

    return (
        <section id="testimonials">
            <div className="max-w-7xl mx-auto px-4 mt-12 lg:mt-20">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    className="text-center mb-12 lg:mb-20 border-t border-neutral-800"
                >
                    <h2 className="font-abril text-3xl lg:text-5xl mt-12 lg:mt-20 tracking-tighter
                        bg-gradient-to-t from-customWhite via-customWhiteHover to-neutral-600 
                        bg-clip-text text-transparent lg:pb-[6px]"
                    >
                        {TESTIMONIALS_CONTENT.sectionTitle}
                    </h2>
                    <p className="font-sans mt-4 text-customWhite/60">
                        {TESTIMONIALS_CONTENT.sectionDescription}
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
                        <motion.div 
                            key={index} 
                            custom={index}
                            variants={testimonialVariants}
                            className="flex flex-col items-start lg:items-center justify-center
                            overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-900 p-10"
                        >
                            <p className="mb-4 text-customWhite">
                                {review.review}
                            </p>
                            <div className="flex items-center mt-4">
                                <div className="w-12 h-12 overflow-hidden mr-4">
                                    <img 
                                        src={review.image} 
                                        alt={review.alt} 
                                        className="w-full h-full object-top object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-customWhite">
                                        {review.name}
                                    </p>
                                    <p className="text-sm text-customWhite/60">
                                        {review.title}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials