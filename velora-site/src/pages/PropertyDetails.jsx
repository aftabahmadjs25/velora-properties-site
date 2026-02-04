import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Bed,
    Bath,
    Square,
    Calendar,
    Check,
    Mail,
    Phone,
} from "lucide-react";
import heroBg from "../assets/images/image-0.jpg";

// Import data
import { propertiesData } from "../data/properties";

const PropertyDetails = () => {
    const { id } = useParams();
    const property = propertiesData.find((p) => p.id === id);

    if (!property) {
        return (
            <div className="pt-40 pb-20 text-center bg-dark-blue min-h-screen">
                <h1 className="text-4xl font-serif text-white">Property Not Found</h1>
                <Link to="/properties" className="mt-8 text-primary border-b border-primary hover:text-white hover:border-white transition-colors">
                    Back to Listings
                </Link>
            </div>
        );
    }

    const specs = [
        { icon: <Bed size={24} />, label: "Bedrooms", value: property.beds },
        { icon: <Bath size={24} />, label: "Bathrooms", value: property.baths },
        { icon: <Square size={24} />, label: "Sq Ft", value: property.sqft },
        { icon: <Calendar size={24} />, label: "Year Built", value: property.yearBuilt },
    ];

    return (
        <div className="bg-white min-h-screen text-dark-blue">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Property Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-dark-blue/70 backdrop-blur-[2px]" />
                </div>

                <div className="container relative z-10 mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center justify-center gap-2 text-primary text-sm uppercase tracking-widest mb-4">
                            <Link to="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link to="/properties" className="hover:text-white transition-colors">Properties</Link>
                            <span>/</span>
                            <span className="text-white/60">{property.title}</span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl text-white">{property.title}</h1>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Sections */}
            <div className="container mx-auto px-6 py-20 lg:py-32">

                {/* Full Width Top: Image & Introduction */}
                <div className="max-w-7xl mx-auto">
                    {/* Main Image - Now Expanded */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-[500px] md:h-[700px] mb-12 overflow-hidden shadow-2xl"
                    >
                        <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <div className="mb-12">
                        <h2 className="font-serif text-4xl md:text-6xl mb-2">{property.title}</h2>
                        <p className="text-primary font-serif italic text-2xl md:text-3xl mb-12">{property.price}</p>

                        {/* Specs Boxes - Centered for better full-width look */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                            {specs.map((spec, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                                    className="bg-secondary/10 p-8 flex flex-col items-center text-center justify-center border border-secondary/5 hover:border-primary/30 transition-colors"
                                >
                                    <div className="text-primary mb-4 p-4 bg-white rounded-full shadow-sm">
                                        {spec.icon}
                                    </div>
                                    <span className="font-serif text-3xl mb-1">{spec.value}</span>
                                    <span className="text-xs uppercase tracking-widest text-dark-blue/50 font-medium">{spec.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* About Section - Full Width */}
                        <div className="mb-24 max-w-4xl">
                            <h3 className="font-serif text-3xl md:text-4xl mb-8">About This Property</h3>
                            <p className="text-dark-blue/70 leading-relaxed text-lg italic font-serif">
                                {property.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Side-by-Side Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start max-w-7xl mx-auto">

                    {/* Left: Features & Technical Details */}
                    <div className="lg:col-span-8">
                        {/* Features & Amenities */}
                        <div className="mb-20">
                            <h3 className="font-serif text-3xl mb-10">Features & Amenities</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                {property.features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: (idx % 2) * 0.1 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="p-1.5 bg-primary/20 rounded-sm">
                                            <Check size={16} className="text-primary" />
                                        </div>
                                        <span className="text-dark-blue/80 text-lg">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Property Details Table */}
                        <div className="mb-16">
                            <h3 className="font-serif text-3xl mb-10">Property Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-dark-blue/10">
                                <div className="flex justify-between py-5 border-b border-dark-blue/10">
                                    <span className="text-dark-blue/50">Property Type</span>
                                    <span className="font-bold">{property.type}</span>
                                </div>
                                <div className="flex justify-between py-5 border-b border-dark-blue/10">
                                    <span className="text-dark-blue/50">Year Built</span>
                                    <span className="font-bold">{property.yearBuilt}</span>
                                </div>
                                <div className="flex justify-between py-5 border-b border-dark-blue/10">
                                    <span className="text-dark-blue/50">Square Footage</span>
                                    <span className="font-bold">{property.sqft} Sq Ft</span>
                                </div>
                                <div className="flex justify-between py-5 border-b border-dark-blue/10">
                                    <span className="text-dark-blue/50">Status</span>
                                    <span className="font-bold">{property.status}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Interested & Agency Sidebars */}
                    <div className="lg:col-span-4 space-y-8 sticky top-[100px]">
                        {/* Contact Box */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white p-10 shadow-2xl border border-dark-blue/5"
                        >
                            <h3 className="font-serif text-3xl mb-8 leading-tight">Interested In This Property?</h3>
                            <p className="text-dark-blue/60 text-sm mb-10">Contact our team for a private viewing or more information.</p>

                            <div className="space-y-8">
                                <a href="mailto:info@gmail.com" className="flex items-center gap-5 group">
                                    <div className="p-4 bg-dark-blue text-white rounded-full transition-transform group-hover:scale-110">
                                        <Mail size={20} />
                                    </div>
                                    <span className="text-dark-blue font-medium hover:text-primary transition-colors italic font-serif text-lg">info@gmail.com</span>
                                </a>
                                <a href="tel:+12125550198" className="flex items-center gap-5 group">
                                    <div className="p-4 bg-dark-blue text-white rounded-full transition-transform group-hover:scale-110">
                                        <Phone size={20} />
                                    </div>
                                    <span className="text-dark-blue font-medium hover:text-primary transition-colors italic font-serif text-lg">+1 (212) 555-0198</span>
                                </a>
                            </div>
                        </motion.div>

                        {/* Agency Box */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            className="bg-white p-10 shadow-2xl border border-dark-blue/5"
                        >
                            <h3 className="font-serif text-2xl mb-6 leading-tight">Velora Real Estate</h3>
                            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-6">Luxury Property Specialists</p>
                            <p className="text-dark-blue/60 text-base leading-relaxed mb-0">
                                With over 15 years of experience in luxury real estate, our team is dedicated to finding you the perfect home.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
