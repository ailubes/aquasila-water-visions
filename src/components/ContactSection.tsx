
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t("contact.success"),
        description: new Date().toLocaleString(),
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-4">{t("contact.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.phone")}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark"
                disabled={loading}
              >
                {loading ? "Sending..." : t("contact.send")}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-primary text-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-8 border-b border-white/20 pb-4">
                {t("contact.title")}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-white/90 mb-1">{t("contact.address")}</p>
                    <p className="text-white/70">{t("contact.addressValue")}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-4 mt-1" />
                  <div>
                    <div className="mb-2">
                      <p className="font-medium text-white/90 mb-1">{t("contact.phone1")}</p>
                      <a href="tel:+380675024730" className="text-white/70 hover:text-white">
                        +380 67 502 4730
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-white/90 mb-1">{t("contact.phone2")}</p>
                      <a href="tel:+380508796803" className="text-white/70 hover:text-white">
                        +380 50 879 6803
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-white/90 mb-1">{t("contact.emailLabel")}</p>
                    <a href="mailto:lubomir.haidamaka@gmail.com" className="text-white/70 hover:text-white">
                      lubomir.haidamaka@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <iframe
                  title="AQUASILA Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.39649862933!2d30.35704561537264!3d50.32649740458826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ca266c908461%3A0xfae432bb18098b34!2sVidrodzennia%20St%2C%205%2C%20Vita-Poshtova%2C%20Kyiv%20Oblast%2C%20Ukraine%2C%2008170!5e0!3m2!1sen!2sus!4v1648654429670!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="rounded-md"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
