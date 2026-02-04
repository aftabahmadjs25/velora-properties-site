import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ChevronDown, ArrowUpRight } from "lucide-react";
import Contact from "../components/sections/Contact";
import heroBg from "../assets/images/image-0.jpg";

// Import data
import { propertiesData } from "../data/properties";

const typeOptions = ["All Types", "Penthouse", "Villa", "Apartment", "Townhouse", "Mansion"];
const cityOptions = ["All Cities", "New York", "Malibu", "Los Angeles", "Chicago", "Miami"];

const Properties = () => {
    const [activeDropdown, setActiveDropdown] = useState(null); // 'type' or 'city'
    const [selectedType, setSelectedType] = useState("All Types");
    const [selectedCity, setSelectedCity] = useState("All Cities");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const dropdownRef = useRef(null);

    // Reset page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedType, selectedCity, searchQuery]);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = (type) => {
        setActiveDropdown(activeDropdown === type ? null : type);
    };

    const handleSelect = (category, value) => {
        if (category === 'type') {
            setSelectedType(value);
        } else {
            setSelectedCity(value);
        }
        setActiveDropdown(null);
    };

    // Filtering Logic
    const filteredProperties = propertiesData.filter((item) => {
        const matchesType = selectedType === "All Types" || item.type.toLowerCase().includes(selectedType.toLowerCase());
        const matchesCity = selectedCity === "All Cities" || item.location.toLowerCase().includes(selectedCity.toLowerCase());
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.location.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesType && matchesCity && matchesSearch;
    });

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProperties.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

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
            <section className="py-8 bg-dark-blue border-b border-white/10 sticky top-[80px] z-30" ref={dropdownRef}>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base">
                        {/* Search */}
                        <div className="relative col-span-2 md:col-span-1">
                            <input
                                type="text"
                                placeholder="Search By Name, Keywords"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white text-dark-blue py-3 md:py-4 px-10 md:px-12 focus:outline-none placeholder:text-dark-blue/50"
                            />
                            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-dark-blue" size={18} />
                        </div>

                        {/* Dropdown 1: Type */}
                        <div className="relative col-span-1">
                            <button
                                onClick={() => toggleDropdown('type')}
                                className="w-full bg-white text-dark-blue py-3 md:py-4 px-4 md:px-6 flex items-center justify-between overflow-hidden cursor-pointer"
                            >
                                <span className="truncate">{selectedType}</span>
                                <ChevronDown size={18} className={`transition-transform duration-300 shrink-0 ml-2 ${activeDropdown === 'type' ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === 'type' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 w-full bg-white border-t border-dark-blue/10 shadow-xl overflow-hidden z-40"
                                    >
                                        {typeOptions.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => handleSelect('type', option)}
                                                className="w-full text-left px-6 py-3 text-dark-blue hover:bg-primary/10 transition-colors border-b border-dark-blue/5 last:border-none cursor-pointer"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Dropdown 2: City */}
                        <div className="relative col-span-1">
                            <button
                                onClick={() => toggleDropdown('city')}
                                className="w-full bg-white text-dark-blue py-3 md:py-4 px-4 md:px-6 flex items-center justify-between overflow-hidden cursor-pointer"
                            >
                                <span className="truncate">{selectedCity}</span>
                                <ChevronDown size={18} className={`transition-transform duration-300 shrink-0 ml-2 ${activeDropdown === 'city' ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === 'city' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 w-full bg-white border-t border-dark-blue/10 shadow-xl overflow-hidden z-40"
                                    >
                                        {cityOptions.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => handleSelect('city', option)}
                                                className="w-full text-left px-6 py-3 text-dark-blue hover:bg-primary/10 transition-colors border-b border-dark-blue/5 last:border-none cursor-pointer"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Property List */}
            <section className="py-20 bg-dark-blue/50 min-h-[600px]" id="properties-list">
                <div className="container mx-auto px-6 space-y-20">
                    {currentItems.length > 0 ? (
                        currentItems.map((item) => (
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
                                            <Link to={`/property/${item.id}`} className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-primary transition-colors group/btn cursor-pointer">
                                                View Details <ArrowUpRight className="group-hover/btn:-translate-y-1 transition-transform" size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="py-40 text-center">
                            <h2 className="font-serif text-4xl mb-4">No Properties Found</h2>
                            <p className="text-white/60">Try adjusting your filters or search keywords.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedType("All Types");
                                    setSelectedCity("All Cities");
                                }}
                                className="mt-8 text-primary border-b border-primary hover:text-white hover:border-white transition-colors cursor-pointer"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="container mx-auto px-6 py-20 flex justify-center gap-4">
                        {[...Array(totalPages)].map((_, idx) => (
                            <button
                                key={idx + 1}
                                onClick={() => {
                                    setCurrentPage(idx + 1);
                                    document.getElementById('properties-list')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`w-12 h-12 rounded-full border flex items-center justify-center font-serif text-xl transition-all cursor-pointer ${currentPage === idx + 1
                                    ? "bg-white text-dark-blue border-transparent shadow-lg"
                                    : "text-white border-white/20 hover:bg-white hover:text-dark-blue"
                                    }`}
                            >
                                {idx + 1}
                            </button>
                        ))}
                    </div>
                )}
            </section>

            {/* Contact Section */}
            <Contact />
        </div>
    );
};

export default Properties;
