import { motion } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
    return (
        <section className="py-24 bg-light-gray text-dark-blue">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl mb-16"
                >
                    Testimonials
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white text-2xl font-serif mb-6">
                        J
                    </div>

                    <h3 className="text-xl font-bold mb-2">Len Swain</h3>

                    <div className="flex gap-1 text-orange-400 mb-8">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={20} fill="currentColor" strokeWidth={0} />
                        ))}
                    </div>

                    <blockquote className="text-lg md:text-xl leading-relaxed text-accent mb-12">
                        "Working with Velora was a smooth and reassuring experience from start to finish. The team listened carefully to our needs and recommended properties that truly matched our expectations.
                        <br /><br />
                        Their guidance made the entire process simple and stress-free. Communication was clear, honest, and always on time.
                        <br /><br />
                        We couldn't be happier with our decision and highly recommend Velora."
                    </blockquote>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-dark-blue/80 transition-colors">
                            <ArrowLeft size={20} />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-white text-dark-blue border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
