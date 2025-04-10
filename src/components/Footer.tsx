import { useLanguage } from "@/context/LanguageContext";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2c4755] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <img 
              src="/lovable-uploads/7979ffec-81c8-4b87-9e77-e1acbf39685e.png" 
              alt="AQUASILA" 
              className="h-24 mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-3 hover:drop-shadow-lg" 
            />
            <p className="text-white/70 mb-6">
              AQUASILA - {t("hero.subtitle")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("nav.services")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/reservoirs" className="text-white/70 hover:text-primary transition-colors">
                  {t("services.reservoirs.title")}
                </Link>
              </li>
              <li>
                <Link to="/services/pools" className="text-white/70 hover:text-primary transition-colors">
                  {t("services.pools.title")}
                </Link>
              </li>
              <li>
                <Link to="/services/ponds" className="text-white/70 hover:text-primary transition-colors">
                  {t("services.ponds.title")}
                </Link>
              </li>
              <li>
                <Link to="/services/aquaculture" className="text-white/70 hover:text-primary transition-colors">
                  {t("services.aquaculture.title")}
                </Link>
              </li>
              <li>
                <Link to="/services/custom" className="text-white/70 hover:text-primary transition-colors">
                  {t("services.custom.title")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("nav.contact")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2" />
                <div>
                  <a href="tel:+380675024730" className="text-white/70 hover:text-primary transition-colors">
                    +380 67 502 4730
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2" />
                <div>
                  <a href="tel:+380508796803" className="text-white/70 hover:text-primary transition-colors">
                    +380 50 879 6803
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2" />
                <div>
                  <a href="mailto:lubomir.haidamaka@gmail.com" className="text-white/70 hover:text-primary transition-colors">
                    lubomir.haidamaka@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {year} AQUASILA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
