
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Image, Plus, Pencil, Trash2, Save, X, Upload, LayoutGrid 
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample projects data (same as in ProjectsPage.tsx)
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
  }
];

const AdminPage = () => {
  const { t, language } = useLanguage();
  const [projects, setProjects] = useState(sampleProjects);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [tempImage, setTempImage] = useState<string | null>(null);

  const projectTypes = [
    { value: "reservoirs", label: t("services.reservoirs.title") },
    { value: "pools", label: t("services.pools.title") },
    { value: "ponds", label: t("services.ponds.title") },
    { value: "aquaculture", label: t("services.aquaculture.title") },
    { value: "custom", label: t("services.custom.title") },
  ];

  const handleAddProject = () => {
    setIsCreating(true);
    setCurrentProject({
      id: Date.now(),
      imageUrl: "",
      title: { en: "", uk: "" },
      type: "reservoirs",
      description: { en: "", uk: "" }
    });
  };

  const handleEditProject = (project: any) => {
    setIsEditing(true);
    setCurrentProject({...project});
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const handleSave = () => {
    if (isCreating) {
      setProjects([...projects, currentProject]);
      setIsCreating(false);
    } else if (isEditing) {
      setProjects(projects.map(p => p.id === currentProject.id ? currentProject : p));
      setIsEditing(false);
    }
    setCurrentProject(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsCreating(false);
    setCurrentProject(null);
    setTempImage(null);
  };

  const handleInputChange = (field: string, value: string, lang?: string) => {
    if (lang) {
      setCurrentProject({
        ...currentProject,
        [field]: {
          ...currentProject[field],
          [lang]: value
        }
      });
    } else {
      setCurrentProject({
        ...currentProject,
        [field]: value
      });
    }
  };

  const simulateImageUpload = () => {
    // In a real app, this would be an actual file upload
    const randomImage = [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      "https://images.unsplash.com/photo-1444076784383-69ff7bae1b0a"
    ][Math.floor(Math.random() * 4)];
    
    setCurrentProject({
      ...currentProject,
      imageUrl: randomImage
    });
    setTempImage(randomImage);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 lg:pt-28">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-secondary">{t("admin.title")}</h1>
                <p className="text-gray-600">{t("admin.projects")}</p>
              </div>
              <div className="flex space-x-4">
                <Link to="/projects">
                  <Button variant="outline" className="flex items-center gap-2">
                    <LayoutGrid size={16} />
                    {t("projects.allTitle")}
                  </Button>
                </Link>
                <Button onClick={handleAddProject} className="flex items-center gap-2">
                  <Plus size={16} />
                  {t("admin.addProject")}
                </Button>
              </div>
            </div>
            
            {(isEditing || isCreating) ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">
                  {isCreating ? t("admin.addProject") : t("admin.editProject")}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("admin.projectTitle")} (EN)
                      </label>
                      <Input
                        value={currentProject.title.en}
                        onChange={(e) => handleInputChange('title', e.target.value, 'en')}
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("admin.projectTitle")} (UK)
                      </label>
                      <Input
                        value={currentProject.title.uk}
                        onChange={(e) => handleInputChange('title', e.target.value, 'uk')}
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("admin.projectType")}
                      </label>
                      <select
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        value={currentProject.type}
                        onChange={(e) => handleInputChange('type', e.target.value)}
                      >
                        {projectTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("admin.projectDescription")} (EN)
                      </label>
                      <Textarea
                        value={currentProject.description.en}
                        onChange={(e) => handleInputChange('description', e.target.value, 'en')}
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("admin.projectDescription")} (UK)
                      </label>
                      <Textarea
                        value={currentProject.description.uk}
                        onChange={(e) => handleInputChange('description', e.target.value, 'uk')}
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("admin.projectImage")}
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                      {tempImage || currentProject.imageUrl ? (
                        <div className="relative w-full">
                          <img
                            src={tempImage || currentProject.imageUrl}
                            alt="Project preview"
                            className="w-full h-64 object-cover rounded-md"
                          />
                          <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={() => {
                              setTempImage(null);
                              handleInputChange('imageUrl', '');
                            }}
                          >
                            <X size={16} />
                          </Button>
                        </div>
                      ) : (
                        <>
                          <Image className="h-12 w-12 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600 mb-2">{t("admin.projectImage")}</p>
                          <Button onClick={simulateImageUpload} variant="outline" className="flex items-center gap-2">
                            <Upload size={16} />
                            Upload Image
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-4 mt-6">
                  <Button variant="outline" onClick={handleCancel}>
                    {t("admin.cancel")}
                  </Button>
                  <Button onClick={handleSave} className="flex items-center gap-2">
                    <Save size={16} />
                    {t("admin.save")}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={project.imageUrl}
                        alt={project.title[language]}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 flex space-x-2">
                        <Button
                          variant="secondary"
                          size="icon"
                          className="bg-white/80 hover:bg-white"
                          onClick={() => handleEditProject(project)}
                        >
                          <Pencil size={16} />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDeleteProject(project.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mb-2">
                        {projectTypes.find(type => type.value === project.type)?.label}
                      </span>
                      <h3 className="font-semibold text-lg text-secondary">{project.title[language]}</h3>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{project.description[language]}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminPage;
