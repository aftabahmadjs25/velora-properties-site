import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-24 bg-white text-dark-blue">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Side: Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary font-serif italic text-xl mb-4 block">About Us</span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                        Where Vision Meets Value <br />
                        <span className="font-light">Curated Properties for Modern Living Guided by Expertise & Trust</span> <br />
                        Designed Around Your Lifestyle
                    </h2>
                </motion.div>

                {/* Right Side: Text & Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-center"
                >
                    <div className="space-y-6 text-accent mb-12">
                        <p>
                            For over fifteen years, Velora has been the trusted partner for those seeking extraordinary properties that transcend the ordinary.
                        </p>
                        <p>
                            Our dedicated team of experts combines deep market knowledge with an unwavering commitment to excellence. We don't just sell properties—we curate lifestyles, matching each client with spaces that reflect their unique aspirations and desires.
                        </p>
                        <p>
                            From architectural masterpieces in cosmopolitan centers to serene coastal retreats, our portfolio represents the pinnacle of residential luxury across the globe.
                        </p>
                    </div>

                    {/* Stats Grid - Updated to match design with 4 columns and dividers */}
                    <div className="flex flex-wrap md:flex-nowrap justify-between items-center py-8 border-t border-gray-200 mt-8 gap-8 md:gap-0">
                        <div className="text-center md:text-left w-full md:w-auto">
                            <span className="block font-serif text-4xl md:text-5xl text-primary mb-2">15+</span>
                            <span className="text-sm text-accent uppercase tracking-wider block">Years<br />Experience</span>
                        </div>

                        <div className="hidden md:block h-16 w-px bg-gray-300 mx-6"></div>

                        <div className="text-center md:text-left w-full md:w-auto">
                            <span className="block font-serif text-4xl md:text-5xl text-primary mb-2">120+</span>
                            <span className="text-sm text-accent uppercase tracking-wider block">Projects<br />Completed</span>
                        </div>

                        <div className="hidden md:block h-16 w-px bg-gray-300 mx-6"></div>

                        <div className="text-center md:text-left w-full md:w-auto">
                            <span className="block font-serif text-4xl md:text-5xl text-primary mb-2">8</span>
                            <span className="text-sm text-accent uppercase tracking-wider block">Design<br />Awards</span>
                        </div>

                        <div className="hidden md:block h-16 w-px bg-gray-300 mx-6"></div>

                        <div className="text-center md:text-left w-full md:w-auto">
                            <span className="block font-serif text-4xl md:text-5xl text-primary mb-2">12+</span>
                            <span className="text-sm text-accent uppercase tracking-wider block">Years<br />Experience</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
