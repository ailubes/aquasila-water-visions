
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Filter, Image } from "lucide-react";

// Sample projects data
const sampleProjects = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: {
      en: "Mountain Lake Reservoir",
      uk: "Гірське озеро-водосховище"
    },
    type: "reservoirs",
    description: {
      en: "A beautiful reservoir built in the mountains providing water for the local community.",
      uk: "Прекрасне водосховище, побудоване в горах, що забезпечує водою місцеву громаду."
    }
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    title: {
      en: "Luxury Pool Complex",
      uk: "Комплекс преміум басейнів"
    },
    type: "pools",
    description: {
      en: "High-end swimming pool design for a luxury hotel complex.",
      uk: "Елітний дизайн басейну для розкішного готельного комплексу."
    }
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    title: {
      en: "Natural Swimming Pond",
      uk: "Природний плавальний ставок"
    },
    type: "ponds",
    description: {
      en: "Eco-friendly swimming pond with natural filtration system.",
      uk: "Екологічно чистий плавальний ставок із природною системою фільтрації."
    }
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1444076784383-69ff7bae1b0a",
    title: {
      en: "Commercial Aquaculture Facility",
      uk: "Комерційний об'єкт аквакультури"
    },
    type: "aquaculture",
    description: {
      en: "Large scale RAS system for sustainable fish production.",
      uk: "Великомасштабна система RAS для сталого виробництва риби."
    }
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1455156218388-5e61b526818b",
    title: {
      en: "Custom Water Feature",
      uk: "Спеціальний водний об'єкт"
    },
    type: "custom",
    description: {
      en: "Unique water feature designed for a corporate headquarters.",
      uk: "Унікальний водний об'єкт, розроблений для корпоративної штаб-квартири."
    }
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1505142468610-359e7d316be0",
    title: {
      en: "Irrigation Reservoir",
      uk: "Іригаційне водосховище"
    },
    type: "reservoirs",
    description: {
      en: "Agricultural water storage system for large farm irrigation.",
      uk: "Система зберігання води для сільськогосподарського зрошення великої ферми."
    }
  },
];

const ProjectsPage = () => {
  const { t, language } = useLanguage();
  const [filteredType, setFilteredType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projectTypes = [
    { value: "all", label: t("nav.projects") },
    { value: "reservoirs", label: t("services.reservoirs.title") },
    { value: "pools", label: t("services.pools.title") },
    { value: "ponds", label: t("services.ponds.title") },
    { value: "aquaculture", label: t("services.aquaculture.title") },
    { value: "custom", label: t("services.custom.title") },
  ];

  const filteredProjects = sampleProjects.filter(project => {
    const matchesType = filteredType === "all" || project.type === filteredType;
    const projectTitle = project.title[language].toLowerCase();
    const projectDesc = project.description[language].toLowerCase();
    const matchesSearch = searchQuery === "" || 
      projectTitle.includes(searchQuery.toLowerCase()) ||
      projectDesc.includes(searchQuery.toLowerCase());
    
    return matchesType && matchesSearch;
  });

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  
  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 lg:pt-28">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">{t("projects.allTitle")}</h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t("projects.allDescription")}
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8 items-end">
              <div className="w-full md:w-1/3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("admin.projectTitle")}
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder={t("admin.projectTitle")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("projects.filter")}
                </label>
                <div className="relative">
                  <select 
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    value={filteredType}
                    onChange={(e) => setFilteredType(e.target.value)}
                  >
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none h-4 w-4" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title[language]}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs">
                      {projectTypes.find(type => type.value === project.type)?.label}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-secondary">
                      {project.title[language]}
                    </h3>
                    <p className="text-gray-600">
                      {project.description[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {visibleProjects < filteredProjects.length && (
              <div className="text-center mt-12">
                <Button onClick={loadMore} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  {t("projects.loadMore")}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
