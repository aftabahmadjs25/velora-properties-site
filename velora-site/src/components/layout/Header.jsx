import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Properties", href: "/#properties" },
        { name: "Blog", href: "/#blog" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10",
                scrolled || mobileMenuOpen ? "bg-dark-blue/90 backdrop-blur-md py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-serif text-white tracking-widest z-50 relative">
                    VELORA
                    <span className="block text-[10px] font-sans tracking-[0.3em] text-secondary uppercase mt-[-4px]">
                        Properties
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = link.href.startsWith("/#")
                            ? (location.pathname === "/" && location.hash === link.href.substring(1))
                            : (location.pathname === link.href && (link.href !== "/" || location.hash === ""));

                        return (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                className={cn(
                                    "transition-colors text-sm font-medium border-b-2 border-transparent pb-1",
                                    isActive ? "text-primary border-primary" : "text-white/80 hover:text-primary"
                                )}
                            >
                                {link.name}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Desktop CTA Button */}
                <a href="#contact" className="hidden md:block bg-primary text-dark-blue px-6 py-3 font-medium text-sm hover:bg-white transition-colors cursor-pointer">
                    Book Consultation
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white z-50 relative"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Dropdown */}
                <div className={cn(
                    "absolute top-full left-0 w-full bg-dark-blue border-b border-white/10 flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden overflow-hidden",
                    mobileMenuOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
                )}>
                    <nav className="flex flex-col items-center gap-6 mb-6">
                        {navLinks.map((link) => {
                            const isActive = link.href.startsWith("/#")
                                ? (location.pathname === "/" && location.hash === link.href.substring(1))
                                : (location.pathname === link.href && (link.href !== "/" || location.hash === ""));

                            return (
                                <NavLink
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                        "text-lg font-serif transition-colors",
                                        isActive ? "text-primary italic" : "text-white hover:text-primary"
                                    )}
                                >
                                    {link.name}
                                </NavLink>
                            );
                        })}
                    </nav>
                    <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="bg-primary text-dark-blue px-6 py-3 font-medium text-sm hover:bg-white transition-colors cursor-pointer"
                    >
                        Book Consultation
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
