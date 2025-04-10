
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video or image */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-primary/80 z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] 
          bg-cover bg-center mix-blend-overlay"
        ></div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white z-10">
        <svg 
          className="absolute bottom-full w-full text-white" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-white"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-white"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-white font-bold mb-6 mx-auto max-w-4xl">
          {t("hero.title")}
        </h1>
        <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          {t("hero.subtitle")}
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 transition-all"
        >
          {t("hero.cta")}
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="text-white h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;
