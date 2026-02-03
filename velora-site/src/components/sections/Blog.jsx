import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import blog1 from "../../assets/images/image-6.jpg";
import blog2 from "../../assets/images/image-7.jpg";

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "How To Choose The Right Property For Long-Term Value",
            date: "5 Dec 2025",
            image: blog1,
        },
        {
            id: 2,
            title: "Top Mistakes To Avoid When Buying Your First Home",
            date: "5 Dec 2025",
            image: blog2,
        }
    ];

    return (
        <section id="blog" className="py-24 bg-white text-dark-blue">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-serif italic text-xl mb-4 block">Blog</span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-blue">
                        Explore Our Blogs
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="overflow-hidden mb-6 h-[400px] w-full">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h3 className="font-serif text-2xl lg:text-3xl mb-3 leading-tight group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <span className="text-sm text-accent">{post.date}</span>
                                </div>

                                <button className="w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-dark-blue transition-colors">
                                    <ArrowUpRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
