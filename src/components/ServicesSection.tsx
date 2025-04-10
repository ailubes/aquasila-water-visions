
import { useLanguage } from "@/context/LanguageContext";
import { Droplet, Droplets, Fish, Waves, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
    <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
      {icon}
    </div>
    <h4 className="text-xl font-semibold mb-2 text-secondary">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Droplet className="h-6 w-6 text-primary" />,
      titleKey: "services.reservoirs.title",
      descriptionKey: "services.reservoirs.description",
    },
    {
      icon: <Droplets className="h-6 w-6 text-primary" />,
      titleKey: "services.pools.title",
      descriptionKey: "services.pools.description",
    },
    {
      icon: <Waves className="h-6 w-6 text-primary" />,
      titleKey: "services.ponds.title",
      descriptionKey: "services.ponds.description",
    },
    {
      icon: <Fish className="h-6 w-6 text-primary" />,
      titleKey: "services.aquaculture.title",
      descriptionKey: "services.aquaculture.description",
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      titleKey: "services.custom.title",
      descriptionKey: "services.custom.description",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-4">{t("services.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
