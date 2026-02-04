import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-24 bg-white text-dark-blue">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Side: Heading */}
                <div className="flex flex-col justify-center">
                    <motion.span
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-primary font-serif italic text-xl mb-4 block"
                    >
                        About Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
                    >
                        Where Vision Meets Value <br />
                        <span className="font-light">Curated Properties for Modern Living Guided by Expertise & Trust</span> <br />
                        Designed Around Your Lifestyle
                    </motion.h2>
                </div>

                {/* Right Side: Text & Stats */}
                <div className="flex flex-col justify-center">
                    <div className="space-y-6 text-accent mb-12">
                        {[
                            "For over fifteen years, Velora has been the trusted partner for those seeking extraordinary properties that transcend the ordinary.",
                            "Our dedicated team of experts combines deep market knowledge with an unwavering commitment to excellence. We don't just sell properties—we curate lifestyles, matching each client with spaces that reflect their unique aspirations and desires.",
                            "From architectural masterpieces in cosmopolitan centers to serene coastal retreats, our portfolio represents the pinnacle of residential luxury across the globe."
                        ].map((text, idx) => (
                            <motion.p
                                key={idx}
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 + (idx * 0.1) }}
                            >
                                {text}
                            </motion.p>
                        ))}
                    </div>

                    {/* Stats Grid - 2x2 on mobile, flex row on desktop */}
                    <div className="grid grid-cols-2 md:flex md:flex-nowrap justify-between items-start md:items-center py-8 border-t border-gray-200 mt-8 gap-y-12 gap-x-8 md:gap-0">
                        {[
                            { val: "15+", label: "Years\nExperience" },
                            { val: "120+", label: "Projects\nCompleted" },
                            { val: "8", label: "Design\nAwards" },
                            { val: "12+", label: "Years\nExperience" }
                        ].map((stat, idx) => (
                            <div key={idx} className="flex items-center md:grow">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 + (idx * 0.1) }}
                                    className="text-center md:text-left w-full md:w-auto"
                                >
                                    <span className="block font-serif text-4xl md:text-5xl text-primary mb-2">{stat.val}</span>
                                    <span className="text-sm text-accent uppercase tracking-wider block whitespace-pre-line leading-relaxed">{stat.label}</span>
                                </motion.div>
                                {idx < 3 && <div className="hidden md:block h-16 w-px bg-gray-300 mx-6 shrink-0"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
