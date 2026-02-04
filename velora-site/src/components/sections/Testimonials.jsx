import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonialsData = [
    {
        id: 1,
        name: "Len Swain",
        initial: "L",
        color: "#8B5CF6",
        quote: `"Working with Velora was a smooth and reassuring experience from start to finish. The team listened carefully to our needs and recommended properties that truly matched our expectations. Their guidance made the entire process simple and stress-free. Communication was clear, honest, and always on time. We couldn't be happier with our decision and highly recommend Velora."`,
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        initial: "S",
        color: "#10B981",
        quote: `"Finding our dream home felt like an impossible task until we met the Velora team. Their attention to detail and local market knowledge is unparalleled. They were patient, professional, and always had our best interests at heart throughout the negotiation process."`,
    },
    {
        id: 3,
        name: "Michael Chen",
        initial: "M",
        color: "#F59E0B",
        quote: `"As an investor, I value transparency and efficiency. Velora provided both, helping me secure two high-yield properties in record time. Their strategic insights into emerging neighborhoods were exactly what I needed to expand my portfolio with confidence."`,
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const current = testimonialsData[currentIndex];

    // Animation variants
    const variants = {
        initial: (direction) => ({
            opacity: 0,
            x: direction > 0 ? 50 : -50
        }),
        animate: {
            opacity: 1,
            x: 0
        },
        exit: (direction) => ({
            opacity: 0,
            x: direction > 0 ? -50 : 50
        })
    };

    return (
        <section className="py-24 bg-light-gray text-dark-blue overflow-hidden">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="font-serif text-4xl md:text-5xl mb-16"
                >
                    Testimonials
                </motion.h2>

                <div className="relative min-h-[400px] flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex flex-col items-center"
                        >
                            {/* Avatar */}
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-serif mb-6 shadow-lg"
                                style={{ backgroundColor: current.color }}
                            >
                                {current.initial}
                            </div>

                            <h3 className="text-xl font-bold mb-2">{current.name}</h3>

                            <div className="flex gap-1 text-orange-400 mb-8">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} size={20} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>

                            <blockquote className="text-lg md:text-xl leading-relaxed text-accent mb-12 italic font-serif">
                                {current.quote}
                            </blockquote>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-auto">
                        <button
                            onClick={prevTestimonial}
                            className="w-12 h-12 rounded-full bg-white text-dark-blue border border-gray-200 flex items-center justify-center hover:bg-dark-blue hover:text-white transition-all duration-300 shadow-md transform hover:scale-110 active:scale-95 group"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="w-12 h-12 rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-white hover:text-dark-blue border border-transparent hover:border-gray-200 transition-all duration-300 shadow-md transform hover:scale-110 active:scale-95 group"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
