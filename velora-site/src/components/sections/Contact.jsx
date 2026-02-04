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
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight"
                    >
                        Let's Find The Right <br />
                        Property For You
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="text-white/80 text-lg mb-12 max-w-md"
                    >
                        Fill out the form and our experts will get in touch with you shortly.
                    </motion.p>

                    <div className="space-y-8">
                        {[
                            { icon: <MapPin size={20} />, label: "Address", text: "2972 eimer Rd. Santa Ana, Dubai" },
                            { icon: <Mail size={20} />, label: "Email Address", text: "Info@gmail.com" },
                            { icon: <Phone size={20} />, label: "Phone Number", text: "(209) 555-0104" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 + (idx * 0.1) }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <span className="block font-bold">{item.label}</span>
                                    <span className="text-white/80">{item.text}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="bg-transparent">
                    <form className="space-y-4">
                        {[
                            { type: "text", placeholder: "Your Name" },
                            { type: "tel", placeholder: "Phone" },
                            { type: "email", placeholder: "Email" },
                            { type: "textarea", placeholder: "Message", rows: 4 }
                        ].map((field, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 + (idx * 0.1) }}
                            >
                                {field.type === "textarea" ? (
                                    <textarea
                                        rows={field.rows}
                                        placeholder={field.placeholder}
                                        className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder:text-white/60 focus:outline-none focus:border-primary transition-colors backdrop-blur-sm resize-none"
                                    ></textarea>
                                ) : (
                                    <input
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder:text-white/60 focus:outline-none focus:border-primary transition-colors backdrop-blur-sm"
                                    />
                                )}
                            </motion.div>
                        ))}

                        <button
                            type="submit"
                            className="bg-primary text-dark-blue px-10 py-4 font-bold hover:bg-white transition-colors cursor-pointer w-auto min-w-[150px]"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
