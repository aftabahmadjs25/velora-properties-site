import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    const getActiveStyles = (href) => {
        const isActive = href.startsWith("/#")
            ? (location.pathname === "/" && location.hash === href.substring(1))
            : (location.pathname === href && (href !== "/" || location.hash === ""));

        return isActive ? "text-primary transition-colors" : "hover:text-primary transition-colors";
    };

    return (
        <footer className="bg-[#EAE8E4] text-dark-blue pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    {/* Logo */}
                    <Link to="/" className="text-3xl font-serif text-dark-blue tracking-widest">
                        VELORA
                        <span className="block text-[11px] font-sans tracking-[0.3em] text-accent uppercase mt-[-4px]">
                            Properties
                        </span>
                    </Link>

                    <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-sm font-medium">
                        <NavLink to="/" className={getActiveStyles("/")}>Home</NavLink>
                        <NavLink to="/#about" className={getActiveStyles("/#about")}>About</NavLink>
                        <NavLink to="/#properties" className={getActiveStyles("/#properties")}>Properties</NavLink>
                        <NavLink to="/#blog" className={getActiveStyles("/#blog")}>Blog</NavLink>
                        <NavLink to="/#contact" className={getActiveStyles("/#contact")}>Contact</NavLink>
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
