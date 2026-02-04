import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import featuredMain from "../../assets/images/image-1.jpg";
import prop1 from "../../assets/images/image-2.png";
import prop2 from "../../assets/images/image-3.jpg";

const FeaturedProperties = () => {
    return (
        <section id="properties" className="bg-dark-blue text-white py-0 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-[600px] lg:h-auto min-h-[600px] relative order-2 lg:order-1"
                >
                    <img
                        src={featuredMain}
                        alt="Featured Luxury Home"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </motion.div>

                {/* Right: Content */}
                <div className="flex flex-col justify-center px-6 py-20 lg:p-24 order-1 lg:order-2 bg-dark-blue">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-serif italic text-xl mb-4 block">Featured Properties</span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                            Exceptional Homes, <br />
                            <span className="font-light italic">Extraordinary Lives</span>
                        </h2>

                        <p className="text-secondary/80 mb-12 max-w-md">
                            Discover our hand-picked selection of the most prestigious properties available on the market today.
                        </p>

                        <Link to="/properties" className="text-white border-b border-primary pb-1 hover:text-primary transition-colors inline-flex items-center gap-2 group">
                            View All Properties
                            <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={18} />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Property Showcase Row - Based on screenshot_04 & 05 */}
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 h-[600px]">
                    {/* Property 1 */}
                    <div className="relative group overflow-hidden">
                        <img
                            src={prop1}
                            alt="Manhattan Penthouse"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-dark-blue/20 group-hover:bg-dark-blue/10 transition-colors" />
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-dark-blue/90 to-transparent">
                            <span className="text-white/80 block mb-2">Manhattan, New York</span>
                            <div className="flex justify-between items-end">
                                <h3 className="font-serif text-3xl md:text-4xl">The Skyline Penthouse</h3>
                                <div className="text-right">
                                    <span className="font-serif text-2xl md:text-3xl block mb-2">$8,500,000</span>
                                    <Link to="/property/skyline-penthouse" className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-primary transition-colors border border-white/30 rounded-full px-4 py-2 hover:bg-white hover:text-dark-blue cursor-pointer">
                                        View Details <ArrowUpRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Property 2 */}
                    <div className="relative group overflow-hidden">
                        <img
                            src={prop2}
                            alt="Malibu Estate"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-dark-blue/20 group-hover:bg-dark-blue/10 transition-colors" />
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-dark-blue/90 to-transparent">
                            <span className="text-white/80 block mb-2">Malibu, California</span>
                            <div className="flex justify-between items-end">
                                <h3 className="font-serif text-3xl md:text-4xl">Coastal Modern Villa</h3>
                                <div className="text-right">
                                    <span className="font-serif text-2xl md:text-3xl block mb-2">$12,750,000</span>
                                    <Link to="/property/skyline-penthouse-2" className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-primary transition-colors border border-white/30 rounded-full px-4 py-2 hover:bg-white hover:text-dark-blue cursor-pointer">
                                        View Details <ArrowUpRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* View All Button Centered at Bottom - Screenshot 05 */}
                <div className="w-full bg-dark-blue py-16 flex justify-center">
                    <Link to="/properties" className="bg-primary text-dark-blue px-8 py-4 font-medium hover:bg-white transition-colors cursor-pointer">
                        View All Properties
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
