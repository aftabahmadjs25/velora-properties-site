import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#EAE8E4] text-dark-blue pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    {/* Logo */}
                    <a href="/" className="text-3xl font-serif text-dark-blue tracking-widest">
                        VELORA
                        <span className="block text-[11px] font-sans tracking-[0.3em] text-accent uppercase mt-[-4px]">
                            Properties
                        </span>
                    </a>

                    {/* Nav */}
                    <nav className="flex gap-8 text-sm font-medium">
                        <a href="#home" className="hover:text-primary transition-colors">Home</a>
                        <a href="#properties" className="hover:text-primary transition-colors">Property Listing</a>
                        <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                    </nav>

                    {/* Socials */}
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-primary hover:text-dark-blue transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-primary hover:text-dark-blue transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-primary hover:text-dark-blue transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-primary hover:text-dark-blue transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-dark-blue/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-accent gap-4 opacity-70">
                    <p>Copyright © Velora . All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-dark-blue">Privacy Policy</a>
                        <a href="#" className="hover:text-dark-blue">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
