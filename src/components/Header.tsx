
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "uk" : "en");
  };

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.projects"), href: "/#projects" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/7979ffec-81c8-4b87-9e77-e1acbf39685e.png" 
            alt="AQUASILA" 
            className="h-10 md:h-12" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-secondary" : "text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          
          <button
            onClick={toggleLanguage}
            className={`px-3 py-1 rounded-md border text-sm font-medium transition-colors ${
              isScrolled
                ? "border-secondary text-secondary hover:bg-secondary hover:text-white"
                : "border-white text-white hover:bg-white/20"
            }`}
          >
            {language === "en" ? "UA" : "EN"}
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} className={isScrolled ? "text-secondary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 z-50">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-secondary hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="self-start px-3 py-1 rounded-md border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
            >
              {language === "en" ? "UA" : "EN"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
