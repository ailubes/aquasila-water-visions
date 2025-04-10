
import { useLanguage } from "@/context/LanguageContext";
import { Compass, Shield, Lightbulb, Leaf } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Compass className="h-8 w-8 text-primary" />,
      title: t("about.expertise"),
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: t("about.quality"),
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: t("about.innovative"),
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: t("about.eco"),
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-6">{t("about.title")}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {t("about.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Company info */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                alt="AQUASILA projects"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-4 rounded-lg shadow-lg hidden md:block">
              <p className="text-white font-semibold">Любомир Гайдамака</p>
              <p className="text-white/90 text-sm">CEO & Founder</p>
            </div>
          </div>

          {/* Right side - Why Choose Us */}
          <div className="pt-10">
            <h3 className="text-2xl font-semibold mb-8 text-secondary">{t("about.why")}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-medium text-gray-900">{feature.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
