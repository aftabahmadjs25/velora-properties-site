import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ChevronDown, ArrowUpRight } from "lucide-react";
import Contact from "../components/sections/Contact";

// Import images
import heroBg from "../assets/images/image-0.jpg";
import prop1 from "../assets/images/image-1.jpg";
import prop2 from "../assets/images/image-2.png";
import prop2a from "../assets/images/image-3.jpg";
import prop3 from "../assets/images/image-4.jpg";
import prop4 from "../assets/images/image-5.png";
import prop5 from "../assets/images/image-6.jpg";
import prop6 from "../assets/images/image-7.jpg";

const propertiesData = [
    {
        id: 1,
        title: "The Skyline Penthouse",
        location: "Malibu, California",
        price: "$8,500,000",
        image: prop2,
    },
    {
        id: 2,
        title: "The Skyline Penthouse",
        location: "Malibu, California",
        price: "$8,500,000",
        image: prop2a,
    },
    {
        id: 3,
        title: "Historic Brownstone",
        location: "Brooklyn Heights, NY",
        price: "$8,500,000",
        image: prop3,
    },
    {
        id: 4,
        title: "Historic Brownstone",
        location: "Brooklyn Heights, NY",
        price: "$8,500,000",
        image: prop4,
    },
    {
        id: 5,
        title: "Historic Brownstone",
        location: "Brooklyn Heights, NY",
        price: "$8,500,000",
        image: prop5,
    },
    {
        id: 6,
        title: "Historic Brownstone",
        location: "Brooklyn Heights, NY",
        price: "$8,500,000",
        image: prop6,
    },
];

const Properties = () => {
    return (
        <div className="bg-dark-blue min-h-screen text-white">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Properties Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-dark-blue/70 backdrop-blur-[2px]" />
                </div>

                <div className="container relative z-10 mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-2 text-primary text-sm uppercase tracking-widest mb-4">
                            <Link to="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-white/60">Properties</span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl">Our Properties</h1>
                    </motion.div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-8 bg-dark-blue border-b border-white/10 sticky top-[80px] z-30">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base">
                        {/* Search */}
                        <div className="relative col-span-2 md:col-span-1">
                            <input
                                type="text"
                                placeholder="Search By Name, Keywords"
                                className="w-full bg-white text-dark-blue py-3 md:py-4 px-10 md:px-12 focus:outline-none placeholder:text-dark-blue/50"
                            />
                            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-dark-blue" size={18} />
                        </div>

                        {/* Dropdown 1 */}
                        <div className="relative group col-span-1">
                            <button className="w-full bg-white text-dark-blue py-3 md:py-4 px-4 md:px-6 flex items-center justify-between overflow-hidden">
                                <span className="truncate">All Types</span>
                                <ChevronDown size={18} className="shrink-0 ml-2" />
                            </button>
                        </div>

                        {/* Dropdown 2 */}
                        <div className="relative group col-span-1">
                            <button className="w-full bg-white text-dark-blue py-3 md:py-4 px-4 md:px-6 flex items-center justify-between overflow-hidden">
                                <span className="truncate">All Cities</span>
                                <ChevronDown size={18} className="shrink-0 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Property List */}
            <section className="py-20 bg-dark-blue/50">
                <div className="container mx-auto px-6 space-y-20">
                    {propertiesData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden mb-8 h-[500px] md:h-[600px]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
                                    <div className="text-white">
                                        <span className="text-primary italic font-serif text-base md:text-lg mb-1 md:mb-2 block">{item.location}</span>
                                        <h3 className="font-serif text-3xl md:text-5xl">{item.title}</h3>
                                    </div>

                                    <div className="text-left md:text-right">
                                        <span className="font-serif text-3xl md:text-5xl block mb-2 md:mb-4">{item.price}</span>
                                        <button className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-primary transition-colors group/btn">
                                            View Details <ArrowUpRight className="group-hover/btn:-translate-y-1 transition-transform" size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="container mx-auto px-6 py-20 flex justify-center gap-4">
                    <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-dark-blue bg-white font-serif text-xl border-none">1</button>
                    <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white font-serif text-xl hover:bg-white hover:text-dark-blue transition-colors">2</button>
                </div>
            </section>

            {/* Contact Section */}
            <Contact />
        </div>
    );
};

export default Properties;
