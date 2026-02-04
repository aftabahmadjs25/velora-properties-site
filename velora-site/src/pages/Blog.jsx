import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Contact from "../components/sections/Contact";
import heroBg from "../assets/images/image-0.jpg";

// Import data
import { blogsData } from "../data/blogs";

const Blog = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("search") || "";
    const categoryQuery = searchParams.get("category") || "All";

    const filteredBlogs = useMemo(() => {
        return blogsData.filter((blog) => {
            const matchesSearch = blog.title.toLowerCase().includes(query.toLowerCase()) ||
                blog.content.toLowerCase().includes(query.toLowerCase());
            const matchesCategory = categoryQuery === "All" || blog.category === categoryQuery;
            return matchesSearch && matchesCategory;
        });
    }, [query, categoryQuery]);

    return (
        <div className="bg-white min-h-screen text-dark-blue">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Blog Hero"
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
                            <span className="text-white/60 text-sm italic font-serif">blog</span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white">Blog</h1>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-6">
                    {filteredBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                            {filteredBlogs.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: (index % 2) * 0.2 }}
                                    className="group cursor-pointer"
                                >
                                    <Link to={`/blog/${post.id}`}>
                                        <div className="overflow-hidden mb-8 h-[350px] md:h-[450px] w-full shadow-lg">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                        </div>
                                    </Link>
                                    <div className="flex justify-between items-start gap-6">
                                        <Link to={`/blog/${post.id}`} className="flex-1">
                                            <div>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-sm">
                                                        {post.category}
                                                    </span>
                                                    <span className="w-1 h-1 rounded-full bg-dark-blue/20" />
                                                    <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-dark-blue/40">
                                                        {post.date}
                                                    </span>
                                                </div>
                                                <h3 className="font-serif text-2xl lg:text-3xl mb-4 leading-tight group-hover:text-primary transition-colors">
                                                    {post.title}
                                                </h3>
                                            </div>
                                        </Link>
                                        <Link to={`/blog/${post.id}`} className="w-12 h-12 rounded-full bg-dark-blue text-white flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-dark-blue transition-all duration-300 group-hover:-translate-y-1">
                                            <ArrowUpRight size={20} />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-40">
                            <h2 className="font-serif text-4xl mb-6">No articles found</h2>
                            <p className="text-dark-blue/50 mb-10 max-w-md mx-auto">We couldn't find any articles matching your criteria.</p>
                            <Link
                                to="/blog"
                                className="bg-dark-blue text-white px-10 py-4 font-serif text-xl hover:bg-primary transition-colors inline-block"
                            >
                                Browse All Articles
                            </Link>
                        </div>
                    )}

                    {/* Pagination */}
                    {filteredBlogs.length > 0 && (
                        <div className="mt-24 flex justify-center items-center gap-4">
                            <button className="text-dark-blue/30 hover:text-primary transition-colors">
                                <ChevronLeft size={24} />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center font-serif text-lg">1</button>
                            <button className="w-10 h-10 rounded-full border border-dark-blue/10 flex items-center justify-center font-serif text-lg hover:bg-dark-blue hover:text-white transition-all">2</button>
                            <button className="w-10 h-10 rounded-full border border-dark-blue/10 flex items-center justify-center font-serif text-lg hover:bg-dark-blue hover:text-white transition-all">3</button>
                            <button className="text-dark-blue hover:text-primary transition-colors">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Contact Section */}
            <Contact />
        </div>
    );
};

export default Blog;
