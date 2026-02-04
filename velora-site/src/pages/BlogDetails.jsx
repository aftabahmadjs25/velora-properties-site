import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Search,
    Calendar,
    ArrowUpRight,
} from "lucide-react";
import Contact from "../components/sections/Contact";
import heroBg from "../assets/images/image-0.jpg";

// Import data
import { blogsData, categories } from "../data/blogs";

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogsData.find((p) => p.id === id);
    const [searchField, setSearchField] = useState("");

    // Get related posts (excluding current)
    const relatedPosts = blogsData.filter(p => p.id !== id).slice(0, 4);
    // Get bottom featured posts
    const bottomPosts = blogsData.filter(p => p.id !== id).slice(0, 2);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchField.trim()) {
            navigate(`/blog?search=${encodeURIComponent(searchField)}`);
        }
    };

    const handleCategoryClick = (cat) => {
        navigate(`/blog?category=${encodeURIComponent(cat)}`);
    };

    if (!blog) {
        return (
            <div className="pt-40 pb-20 text-center bg-dark-blue min-h-screen">
                <h1 className="text-4xl font-serif text-white">Post Not Found</h1>
                <Link to="/blog" className="mt-8 text-primary border-b border-primary hover:text-white hover:border-white transition-colors">
                    Back to Blog
                </Link>
            </div>
        );
    }

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
                            <Link to="/blog" className="hover:text-white transition-colors uppercase italic font-serif">blog</Link>
                            <span>/</span>
                            <span className="text-white/60 text-sm">{blog.title}</span>
                        </div>
                        <h1 className="font-serif text-6xl md:text-8xl text-white">Blog</h1>
                    </motion.div>
                </div>
            </section>

            {/* Mobile-Only Filter & Search Bar - Design Matched to User Image */}
            <section className="py-16 bg-[#EAE8E4] border-b border-dark-blue/5 lg:hidden">
                <div className="container mx-auto px-6">
                    <div className="space-y-10">
                        {/* Search Bar */}
                        <form onSubmit={handleSearch} className="relative group max-w-md mx-auto">
                            <input
                                type="text"
                                value={searchField}
                                onChange={(e) => setSearchField(e.target.value)}
                                placeholder="Search"
                                className="w-full bg-white border-none py-5 px-8 focus:outline-none transition-all text-dark-blue/80 font-serif italic text-lg shadow-sm group-hover:shadow-md"
                            />
                            <button type="submit" className="absolute right-8 top-1/2 -translate-y-1/2 text-dark-blue/60 hover:text-primary transition-colors">
                                <Search size={28} />
                            </button>
                        </form>

                        {/* Categories List - Vertical */}
                        <div className="space-y-6 max-w-md mx-auto">
                            <h2 className="font-serif text-3xl text-dark-blue/90 border-b border-dark-blue/5 pb-4">Categories</h2>
                            <div className="flex flex-col gap-3">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => handleCategoryClick(cat)}
                                        className="text-left text-dark-blue/50 hover:text-primary transition-colors text-lg font-medium w-fit"
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="container mx-auto px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

                    {/* Left: Article Content */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-12 leading-tight">
                                {blog.title}
                            </h2>

                            {/* Main Featured Image */}
                            <div className="w-full h-[400px] md:h-[650px] mb-12 overflow-hidden shadow-2xl rounded-sm">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-8 mb-16 border-b border-dark-blue/10 pb-12">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
                                        <img
                                            src={blog.author?.image || "https://randomuser.me/api/portraits/men/1.jpg"}
                                            alt={blog.author?.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-serif text-xl leading-tight text-dark-blue">{blog.author?.name}</p>
                                        <p className="text-xs uppercase tracking-widest text-dark-blue/50 font-medium">{blog.author?.role}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-dark-blue">
                                    <div className="p-3.5 bg-dark-blue text-white rounded-md shadow-lg shadow-dark-blue/20">
                                        <Calendar size={22} />
                                    </div>
                                    <span className="font-serif text-xl italic">{blog.date}</span>
                                </div>
                            </div>

                            {/* Article Body */}
                            <div className="prose prose-lg max-w-none text-dark-blue/70 leading-relaxed font-sans space-y-10 text-lg">
                                {blog.content ? (
                                    blog.content.split('\n\n').map((paragraph, idx) => {
                                        if (paragraph.trim().startsWith('##')) {
                                            return <h3 key={idx} className="font-serif text-4xl text-dark-blue pt-6 mb-4">{paragraph.replace('## ', '')}</h3>
                                        }
                                        return <p key={idx} className="leading-[1.8]">{paragraph.trim()}</p>
                                    })
                                ) : (
                                    <p>Coming soon...</p>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Sidebar */}
                    <aside className="lg:col-span-4 space-y-16">
                        {/* Desktop Search - Hidden on Mobile */}
                        <div className="hidden lg:block">
                            <form onSubmit={handleSearch} className="relative group bg-white shadow-2xl border border-dark-blue/5 p-1 rounded-sm">
                                <input
                                    type="text"
                                    value={searchField}
                                    onChange={(e) => setSearchField(e.target.value)}
                                    placeholder="Search"
                                    className="w-full bg-transparent border-none py-4 px-6 focus:outline-none italic text-dark-blue/40 font-serif text-lg"
                                />
                                <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-blue p-3 rounded-sm text-white hover:bg-primary hover:text-dark-blue transition-all">
                                    <Search size={20} />
                                </button>
                            </form>
                        </div>

                        {/* Desktop Categories - Hidden on Mobile */}
                        <div className="hidden lg:block">
                            <h4 className="font-serif text-3xl mb-8 border-b border-dark-blue/10 pb-5">Categories</h4>
                            <ul className="space-y-4">
                                {categories.map((cat, idx) => (
                                    <li key={idx} className="border-b border-dark-blue/5 pb-2">
                                        <button
                                            onClick={() => handleCategoryClick(cat)}
                                            className="text-dark-blue/60 hover:text-primary transition-all hover:translate-x-2 inline-flex items-center gap-3 text-lg font-medium group"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Related Posts */}
                        <div>
                            <h4 className="font-serif text-3xl mb-10 border-b border-dark-blue/10 pb-5">Related Posts</h4>
                            <div className="space-y-10">
                                {relatedPosts.map((post) => (
                                    <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-6 group items-center">
                                        <div className="w-24 h-24 shrink-0 overflow-hidden shadow-md rounded-sm">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs text-primary mb-2 uppercase tracking-widest font-bold">{post.date}</p>
                                            <h5 className="font-serif text-lg leading-snug group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h5>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Stay Connected Box */}
                        <div className="bg-dark-blue p-8 text-white rounded-sm shadow-xl">
                            <h4 className="font-serif text-2xl mb-4 text-primary">Stay Connected</h4>
                            <p className="text-white/60 text-sm mb-8 leading-relaxed">Subscribe to our monthly newsletter for exclusive property insights and luxury market updates.</p>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors text-sm rounded-sm"
                                />
                                <button className="w-full bg-primary text-dark-blue py-4 font-bold hover:bg-white transition-colors duration-300 rounded-sm">
                                    Subscribe Now
                                </button>
                            </form>
                        </div>
                    </aside>

                </div>

                {/* Bottom Featured Posts */}
                <div className="mt-40 pt-20 border-t border-dark-blue/10">
                    <h3 className="font-serif text-4xl mb-16 text-center">More From Our Blog</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {bottomPosts.map((post) => (
                            <Link key={post.id} to={`/blog/${post.id}`} className="group">
                                <div className="overflow-hidden mb-8 h-[450px] shadow-2xl rounded-sm">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex justify-between items-center gap-6">
                                    <div className="flex-1">
                                        <h4 className="font-serif text-3xl mb-3 group-hover:text-primary transition-colors leading-tight">{post.title}</h4>
                                        <span className="text-sm text-dark-blue/40 uppercase tracking-widest font-medium">{post.date}</span>
                                    </div>
                                    <div className="w-14 h-14 rounded-full bg-dark-blue text-white flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-dark-blue transition-all duration-300 group-hover:-translate-y-1">
                                        <ArrowUpRight size={22} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Contact />
        </div>
    );
};

export default BlogDetails;
