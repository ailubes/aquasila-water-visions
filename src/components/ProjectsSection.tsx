
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  imageUrl: string;
  titleKey: string;
  categoryKey: string;
}

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      titleKey: "services.reservoirs.title",
      categoryKey: "services.reservoirs.title",
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      titleKey: "services.pools.title",
      categoryKey: "services.pools.title",
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      titleKey: "services.ponds.title",
      categoryKey: "services.ponds.title",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-4">{t("projects.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-[4/3]">
                <img
                  src={project.imageUrl}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary-foreground text-sm">{t(project.categoryKey)}</p>
                  <h4 className="text-white text-xl font-semibold mt-1">{t(project.titleKey)}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              {t("projects.viewAll")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
