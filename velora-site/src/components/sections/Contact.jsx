import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import contactBg from "../../assets/images/image-4.jpg";

const Contact = () => {
    return (
        <section id="contact" className="relative py-24 min-h-[800px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={contactBg}
                    alt="Interior Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Info */}
                <div className="text-white">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight"
                    >
                        Let's Find The Right <br />
                        Property For You
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/80 text-lg mb-12 max-w-md"
                    >
                        Fill out the form and our experts will get in touch with you shortly.
                    </motion.p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <span className="block font-bold">Address</span>
                                <span className="text-white/80">2972 eimer Rd. Santa Ana, Dubai</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <span className="block font-bold">Email Address</span>
                                <span className="text-white/80">Info@gmail.com</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shrink-0">
                                <Phone size={20} />
                            </div>
                            <div>
                                <span className="block font-bold">Phone Number</span>
                                <span className="text-white/80">(209) 555-0104</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-transparent" // Transparent based on design, fields have background
                >
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder:text-white/60 focus:outline-none focus:border-primary transition-colors backdrop-blur-sm"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder:text-white/60 focus:outline-none focus:border-primary transition-colors backdrop-blur-sm"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder:text-white/60 focus:outline-none focus:border-primary transition-colors backdrop-blur-sm"
                        />
                        <textarea
                            rows="4"
                            placeholder="Message"
                            className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder:text-white/60 focus:outline-none focus:border-primary transition-colors backdrop-blur-sm resize-none"
                        ></textarea>

                        <button className="bg-primary text-dark-blue px-10 py-4 font-bold hover:bg-white transition-colors cursor-pointer w-auto min-w-[150px]">
                            Submit
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
