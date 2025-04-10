
import { createContext, useState, useContext, ReactNode } from "react";

type Language = "en" | "uk";

type Translations = {
  [key: string]: {
    en: string;
    uk: string;
  };
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  // Header Navigation
  "nav.home": {
    en: "Home",
    uk: "Головна"
  },
  "nav.about": {
    en: "About Us",
    uk: "Про нас"
  },
  "nav.services": {
    en: "Services",
    uk: "Послуги"
  },
  "nav.projects": {
    en: "Projects",
    uk: "Проекти"
  },
  "nav.contact": {
    en: "Contact",
    uk: "Контакти"
  },
  
  // Hero Section
  "hero.title": {
    en: "Water Engineering Excellence",
    uk: "Досконалість водного інжинірингу"
  },
  "hero.subtitle": {
    en: "Designing and constructing premium water solutions for recreation, agriculture, and industry",
    uk: "Проектування та будівництво преміальних водних рішень для відпочинку, сільського господарства та промисловості"
  },
  "hero.cta": {
    en: "Get a Consultation",
    uk: "Отримати консультацію"
  },
  
  // About Section
  "about.title": {
    en: "About AQUASILA",
    uk: "Про АКВАСИЛА"
  },
  "about.description": {
    en: "AQUASILA is a leading company specializing in the design and construction of water reservoirs, ponds, swimming pools, aquaculture systems (RAS), and other water-related projects. With years of expertise and a commitment to excellence, we provide sustainable and innovative water solutions for both private and commercial clients.",
    uk: "АКВАСИЛА — це провідна компанія, що спеціалізується на проектуванні та будівництві водосховищ, ставків, басейнів, систем аквакультури (RAS) та інших проектів, пов'язаних з водою. Завдяки багаторічному досвіду та прагненню до досконалості ми надаємо стійкі та інноваційні водні рішення як для приватних, так і для комерційних клієнтів."
  },
  "about.why": {
    en: "Why Choose Us",
    uk: "Чому обирають нас"
  },
  "about.expertise": {
    en: "Expert Design & Engineering",
    uk: "Експертне проектування та інженерія"
  },
  "about.quality": {
    en: "Premium Quality Materials",
    uk: "Матеріали преміум якості"
  },
  "about.innovative": {
    en: "Innovative Solutions",
    uk: "Інноваційні рішення"
  },
  "about.eco": {
    en: "Eco-Friendly Approach",
    uk: "Екологічний підхід"
  },
  
  // Services Section
  "services.title": {
    en: "Our Services",
    uk: "Наші Послуги"
  },
  "services.description": {
    en: "We offer comprehensive solutions for all your water-related projects",
    uk: "Ми пропонуємо комплексні рішення для всіх ваших проектів, пов'язаних із водою"
  },
  "services.reservoirs.title": {
    en: "Reservoirs & Ponds",
    uk: "Водосховища та Ставки"
  },
  "services.reservoirs.description": {
    en: "Custom designed water reservoirs and ponds for recreation and irrigation",
    uk: "Індивідуально спроектовані водосховища та ставки для відпочинку та зрошення"
  },
  "services.pools.title": {
    en: "Swimming Pools",
    uk: "Басейни"
  },
  "services.pools.description": {
    en: "Private and commercial swimming pools built to the highest standards",
    uk: "Приватні та комерційні басейни, побудовані за найвищими стандартами"
  },
  "services.ponds.title": {
    en: "Swimming Ponds",
    uk: "Природні Басейни"
  },
  "services.ponds.description": {
    en: "Eco-friendly alternatives to traditional pools with natural filtration",
    uk: "Екологічні альтернативи традиційним басейнам з природною фільтрацією"
  },
  "services.aquaculture.title": {
    en: "Aquaculture Systems",
    uk: "Системи Аквакультури"
  },
  "services.aquaculture.description": {
    en: "Recirculating Aquaculture Systems (RAS) for commercial fish farming",
    uk: "Рециркуляційні системи аквакультури (RAS) для комерційного рибництва"
  },
  "services.custom.title": {
    en: "Custom Water Projects",
    uk: "Індивідуальні Водні Проекти"
  },
  "services.custom.description": {
    en: "Tailored solutions for unique water engineering challenges",
    uk: "Індивідуальні рішення для унікальних завдань водного інжинірингу"
  },
  
  // Projects Section
  "projects.title": {
    en: "Our Projects",
    uk: "Наші Проекти"
  },
  "projects.description": {
    en: "Explore our portfolio of completed water projects",
    uk: "Перегляньте наше портфоліо завершених водних проектів"
  },
  "projects.viewAll": {
    en: "View All Projects",
    uk: "Переглянути всі проекти"
  },
  
  // Contact Section
  "contact.title": {
    en: "Contact Us",
    uk: "Зв'яжіться з Нами"
  },
  "contact.description": {
    en: "Get in touch for a consultation or to discuss your project",
    uk: "Зв'яжіться з нами для консультації або обговорення вашого проекту"
  },
  "contact.name": {
    en: "Name",
    uk: "Ім'я"
  },
  "contact.email": {
    en: "Email",
    uk: "Електронна пошта"
  },
  "contact.phone": {
    en: "Phone",
    uk: "Телефон"
  },
  "contact.message": {
    en: "Message",
    uk: "Повідомлення"
  },
  "contact.send": {
    en: "Send Message",
    uk: "Надіслати повідомлення"
  },
  "contact.address": {
    en: "Address",
    uk: "Адреса"
  },
  "contact.addressValue": {
    en: "5 Vidrodzhennya str, Vita Poshtova, Kievska 08170, Ukraine",
    uk: "вул. Відродження, 5, Віта Поштова, Київська обл., 08170, Україна"
  },
  "contact.phone1": {
    en: "Phone",
    uk: "Телефон"
  },
  "contact.phone2": {
    en: "Mobile",
    uk: "Мобільний"
  },
  "contact.emailLabel": {
    en: "Email",
    uk: "Електронна пошта"
  },
  "contact.success": {
    en: "Your message has been sent!",
    uk: "Ваше повідомлення надіслано!"
  },
  "contact.error": {
    en: "Error sending message. Please try again.",
    uk: "Помилка надсилання повідомлення. Будь ласка, спробуйте ще раз."
  }
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  
  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
