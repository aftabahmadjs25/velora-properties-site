import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import heroImage from "../../assets/images/image-0.jpg";
import preview1 from "../../assets/images/image-1.jpg";
import preview2 from "../../assets/images/image-2.png";
import preview3 from "../../assets/images/image-3.jpg";

const Hero = () => {
    return (
        <section id="home" className="relative h-auto md:h-screen min-h-[800px] w-full overflow-hidden flex flex-col justify-center pb-12 md:pb-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Luxury Property"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay - Matching design darkness */}
                <div className="absolute inset-0 bg-dark-blue/30" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark-blue via-dark-blue/50 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center items-center text-center pt-24 md:pt-0 pb-10 md:pb-0 grow">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
                >
                    Discover Extraordinary <br />
                    <span className="italic font-light">Living Spaces</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-white/90 text-base md:text-xl max-w-2xl font-light mb-8 md:mb-12"
                >
                    We curate the world's most exceptional properties, connecting discerning clients with homes that inspire and captivate.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 w-full md:w-auto px-4 md:px-0"
                >
                    <button className="bg-primary text-dark-blue px-8 py-4 text-sm font-medium hover:bg-white transition-all cursor-pointer w-full md:w-auto min-w-[200px]">
                        Explore Properties
                    </button>
                    <button className="border border-white/30 text-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-dark-blue transition-all cursor-pointer w-full md:w-auto min-w-[200px]">
                        Get Expert Advice
                    </button>
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 left-6 md:left-12 -translate-y-1/2 z-20">
                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white hover:text-dark-blue hover:border-white transition-all cursor-pointer backdrop-blur-sm">
                    <ArrowLeft size={20} />
                </button>
            </div>
            <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 z-20">
                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white hover:text-dark-blue hover:border-white transition-all cursor-pointer backdrop-blur-sm">
                    <ArrowRight size={20} />
                </button>
            </div>

            {/* Bottom Stats - Responsive positioning */}
            <div className="relative z-20 mt-12 md:absolute md:bottom-12 md:left-0 md:w-full md:mt-0">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-0">
                    <div className="flex gap-8 md:gap-12 text-white">
                        <div className="text-center md:text-left">
                            <span className="font-serif text-3xl md:text-4xl block">$2.5B+</span>
                            <span className="text-sm text-white/70">Happy<br />Home owners</span>
                        </div>
                        <div className="h-auto w-px bg-white/20"></div>
                        <div className="text-center md:text-left">
                            <span className="font-serif text-3xl md:text-4xl block">30+</span>
                            <span className="text-sm text-white/70">Properties<br />Sold</span>
                        </div>
                    </div>

                    {/* Small preview images */}
                    <div className="flex gap-4">
                        {[preview1, preview2, preview3].map((img, i) => (
                            <div key={i} className="w-24 md:w-32 h-16 md:h-20 overflow-hidden border-2 border-white/10 hover:border-primary transition-colors">
                                <img src={img} alt="Preview" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Design element: Thin vertical lines */}
            <div className="absolute inset-0 container mx-auto px-6 border-x border-white/5 pointer-events-none z-0"></div>
        </section>
    );
};

export default Hero;
