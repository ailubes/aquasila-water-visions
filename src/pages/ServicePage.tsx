
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServicePageProps {
  serviceType: string;
}

const ServicePage = ({ serviceType }: ServicePageProps) => {
  const { t } = useLanguage();
  
  // Get the appropriate translation keys based on service type
  const titleKey = `servicepage.${serviceType}.title`;
  const descriptionKey = `servicepage.${serviceType}.description`;
  const contentKey = `servicepage.${serviceType}.content`;
  
  // Define hero image based on service type
  const getHeroImage = () => {
    switch (serviceType) {
      case "reservoirs":
        return "https://images.unsplash.com/photo-1506744038136-46273834b3fb";
      case "pools":
        return "https://images.unsplash.com/photo-1501854140801-50d01698950b";
      case "ponds":
        return "https://images.unsplash.com/photo-1433086966358-54859d0ed716";
      case "aquaculture":
        return "https://images.unsplash.com/photo-1444076784383-69ff7bae1b0a";
      case "custom":
        return "https://images.unsplash.com/photo-1455156218388-5e61b526818b";
      default:
        return "https://images.unsplash.com/photo-1506744038136-46273834b3fb";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${getHeroImage()})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-primary/60" />
          </div>
          <div className="relative container mx-auto h-full px-4 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t(titleKey)}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              {t(descriptionKey)}
            </p>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold text-secondary mb-6">
                  {t(titleKey)}
                </h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4 text-lg leading-relaxed">
                    {t(contentKey)}
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {t("nav.services")}
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        to="/services/reservoirs" 
                        className={`block p-3 rounded-md hover:bg-primary/10 ${serviceType === 'reservoirs' ? 'bg-primary/10 font-medium' : ''}`}
                      >
                        {t("services.reservoirs.title")}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services/pools" 
                        className={`block p-3 rounded-md hover:bg-primary/10 ${serviceType === 'pools' ? 'bg-primary/10 font-medium' : ''}`}
                      >
                        {t("services.pools.title")}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services/ponds" 
                        className={`block p-3 rounded-md hover:bg-primary/10 ${serviceType === 'ponds' ? 'bg-primary/10 font-medium' : ''}`}
                      >
                        {t("services.ponds.title")}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services/aquaculture" 
                        className={`block p-3 rounded-md hover:bg-primary/10 ${serviceType === 'aquaculture' ? 'bg-primary/10 font-medium' : ''}`}
                      >
                        {t("services.aquaculture.title")}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services/custom" 
                        className={`block p-3 rounded-md hover:bg-primary/10 ${serviceType === 'custom' ? 'bg-primary/10 font-medium' : ''}`}
                      >
                        {t("services.custom.title")}
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/10 p-6 rounded-lg shadow-sm mt-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {t("nav.contact")}
                  </h3>
                  <p className="mb-6">
                    {t("contact.description")}
                  </p>
                  <Link to="/#contact">
                    <Button className="w-full">
                      {t("hero.cta")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Projects Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-secondary mb-8 text-center">
              {t("projects.title")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={getHeroImage()}
                  alt="Project"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-secondary">
                    {t(titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {t(descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/projects">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  {t("projects.viewAll")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePage;
