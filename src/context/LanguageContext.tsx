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
  "projects.allTitle": {
    en: "All Projects",
    uk: "Всі Проекти"
  },
  "projects.allDescription": {
    en: "Our complete portfolio of successfully completed water engineering projects",
    uk: "Наше повне портфоліо успішно завершених проектів водного інжинірингу"
  },
  "projects.filter": {
    en: "Filter by type",
    uk: "Фільтр за типом"
  },
  "projects.loadMore": {
    en: "Load More",
    uk: "Завантажити ще"
  },

  // Service Detail Pages
  "servicepage.reservoirs.title": {
    en: "Reservoirs & Ponds",
    uk: "Водосховища та Ставки"
  },
  "servicepage.reservoirs.description": {
    en: "Expert design and construction of water reservoirs and ponds for various purposes",
    uk: "Експертне проектування та будівництво водосховищ і ставків для різних цілей"
  },
  "servicepage.reservoirs.content": {
    en: "Our company specializes in the design and construction of water reservoirs and ponds for various purposes including agriculture, recreation, and environmental conservation. With years of experience and expertise in hydraulic engineering, we create sustainable and effective water containment solutions tailored to your specific needs and land characteristics. Whether you need an irrigation pond for your farm, a recreational pond for your property, or a reservoir for water management, our team provides end-to-end services from initial consultation and design to construction and maintenance.",
    uk: "Наша компа��ія спеціалізується на проектуванні та будівництві водосховищ і ставків для різних цілей, включаючи сільське господарство, відпочинок та охорону навколишнього середовища. Маючи багаторічний досвід та експертизу в галузі гідротехнічного будівництва, ми створюємо стійкі та ефективні рішення для утримання води, адаптовані до ваших конкретних потреб та характеристик земельної ділянки. Незалежно від того, чи вам потрібен іригаційний ставок для вашої ферми, рекреаційний ставок для вашої нерухомості, чи водосховище для управління водними ресурсами, наша команда надає повний спектр послуг від початкової консультації та проектування до будівництва та обслуговування."
  },
  
  "servicepage.pools.title": {
    en: "Swimming Pools",
    uk: "Басейни"
  },
  "servicepage.pools.description": {
    en: "Custom designed and built swimming pools for residential and commercial use",
    uk: "Індивідуально спроектовані та побудовані басейни для житлового та комерційного використання"
  },
  "servicepage.pools.content": {
    en: "We design and build premium quality swimming pools for both residential and commercial clients. Our swimming pool construction services include everything from initial design consultation to final installation and maintenance guidance. We use only the highest quality materials and the latest technology to ensure that your pool is not only beautiful but also durable and easy to maintain. Whether you're looking for a simple lap pool, a luxurious infinity pool, or a commercial swimming facility, our team has the expertise to bring your vision to life. We handle all aspects of pool construction including excavation, structural work, plumbing, electrical systems, filtration setup, and finishing touches.",
    uk: "Ми проектуємо та будуємо басейни високої якості як для приватних, так і для комерційних клієнтів. Наші послуги з будівництва басейнів включають усе: від початкової консультації з проектування до остаточного встановлення та рекомендацій з обслуговування. Ми використовуємо лише найякісніші матеріали та новітні технології, щоб ваш басейн був не лише красивим, але й міцним і простим в обслуговуванні. Незалежно від того, чи шукаєте ви простий плавальний басейн, розкішний басейн з нескінченним краєм чи комерційний плавальний комплекс, наша команда має досвід, щоб втілити ваше бачення в життя. Ми займаємося всіма аспектами будівництва басейнів, включно з земляними роботами, конструкційними роботами, сантехнікою, електричними системами, налаштуванням фільтрації та оздобленням."
  },
  
  "servicepage.ponds.title": {
    en: "Swimming Ponds",
    uk: "Природні Басейни"
  },
  "servicepage.ponds.description": {
    en: "Natural swimming ponds with biological filtration for eco-conscious clients",
    uk: "Природні плавальні ставки з біологічною фільтрацією для екологічно свідомих клієнтів"
  },
  "servicepage.ponds.content": {
    en: "Swimming ponds represent the perfect harmony between modern aquatic recreation and natural ecosystems. Unlike traditional swimming pools that rely on chemicals for water purification, our natural swimming ponds utilize biological filtration systems that mimic nature's own water purification processes. These eco-friendly swimming environments consist of a swimming zone and a regeneration zone where carefully selected aquatic plants and beneficial microorganisms naturally clean and filter the water. The result is a crystal-clear, chemical-free swimming experience that integrates beautifully with your landscape. Our swimming ponds are not only visually stunning but also provide a habitat for beneficial wildlife and require minimal maintenance compared to traditional pools.",
    uk: "Природні басейни представляють собою ідеальну гармонію між сучасним водним відпочинком та природними екосистемами. На відміну від традиційних басейнів, які покладаються на хімічні речовини для очищення води, наші природні плавальні ставки використовують біологічні системи фільтрації, що імітують власні процеси очищення води природи. Ці екологічно чисті плавальні середовища складаються з зони для плавання та зони регенерації, де ретельно підібрані водні рослини та корисні мікроорганізми природним чином очищають і фільтрують воду. Результатом є кришталево чистий, вільний від хімікатів плавальний досвід, який чудово інтегрується у ваш ландшафт. Наші плавальні ставки не лише візуально приголомшливі, але й створюють середовище для корисної дикої природи і вимагають мінімального обслуговування порівняно з традиційними басейнами."
  },
  
  "servicepage.aquaculture.title": {
    en: "Aquaculture Systems",
    uk: "Системи Аквакультури"
  },
  "servicepage.aquaculture.description": {
    en: "Advanced recirculating aquaculture systems (RAS) for efficient fish farming",
    uk: "Передові рециркуляційні системи аквакультури (RAS) для ефективного рибництва"
  },
  "servicepage.aquaculture.content": {
    en: "Our Recirculating Aquaculture Systems (RAS) represent the cutting edge of sustainable fish farming technology. These closed-loop systems are designed to optimize water usage, minimize environmental impact, and maximize production efficiency. Our RAS solutions are custom designed to meet your specific production goals, species requirements, and space constraints. We handle all aspects of RAS implementation from system design and component selection to installation, commissioning, and operator training. Key components of our systems include highly efficient mechanical and biological filtration, oxygenation systems, temperature control, automated monitoring, and waste management solutions. Whether you're planning a small-scale demonstration facility or a large commercial operation, our team has the expertise to deliver a reliable and productive aquaculture system.",
    uk: "Наші рециркуляційні системи аквакультури (RAS) представля��ть найсучасніші технології сталого рибництва. Ці замкнуті системи розроблені для оптимізації використання води, мінімізації впливу на навколишнє середовище та максимізації ефективності виробництва. Наші RAS-рішення індивідуально розроблені для задоволення ваших конкретних виробничих цілей, вимог до видів та просторових обмежень. Ми займаємося всіма аспектами впровадження RAS від проектування системи та вибору компонентів до встановлення, введення в експлуатацію та навчання операторів. Ключовими компонентами наших систем є високоефективна механічна та біологічна фільтрація, системи оксигенації, контроль температури, автоматизований моніторинг та рішення з управління відходами. Незалежно від того, чи плануєте ви невеликий демонстраційний об'єкт чи велику комерційну операцію, наша команда має досвід для створення надійної та продуктивної системи аквакультури."
  },
  
  "servicepage.custom.title": {
    en: "Custom Water Projects",
    uk: "Індивідуальні Водні Проекти"
  },
  "servicepage.custom.description": {
    en: "Bespoke water engineering solutions for unique requirements",
    uk: "Індивідуальні інженерні рішення для унікальних потреб"
  },
  "servicepage.custom.content": {
    en: "We understand that not all water projects fit neatly into predefined categories. That's why we offer custom water engineering solutions tailored to address unique challenges and specific requirements. Our experienced team of engineers, designers, and construction professionals collaborate closely with you to develop innovative solutions for complex water management issues. Whether you need a specialized water treatment system, a unique water feature for your property, a complex irrigation solution, or any other water-related project, we have the expertise and capabilities to turn your vision into reality. Our approach begins with a thorough assessment of your needs, followed by conceptual design, detailed engineering, and professional implementation. We pride ourselves on our ability to solve challenging water engineering problems with creative yet practical solutions.",
    uk: "Ми розуміємо, що не всі водні проекти чітко вписуються у визначені категорії. Саме тому ми пропонуємо індивідуальні інженерні рішення, адаптовані для вирішення унікальних викликів та специфічних вимог. Наша досвідчена команда інженерів, проектувальників та будівельних професіоналів тісно співпрацює з вами для розробки інноваційних рішень складних проблем управління водними ресурсами. Незалежно від того, чи вам потрібна спеціалізована система очищення води, унікальний водний об'єкт для вашої нерухомості, складне зрошувальне рішення, чи будь-який інший проект, пов'язаний із водою, ми маємо досвід і можливості перет��орити ваше бачення на реальність. Наш підхід починається з ретельної оцінки ваших потреб, за якою слідує концептуальне проектування, детальна інженерія та професійна реалізація. Ми пишаємося нашою здатністю вирішувати складні проблеми водної інженерії за допомогою творчих, але практичних рішень."
  },

  // Admin Section
  "admin.title": {
    en: "Admin Panel",
    uk: "Панель адміністратора"
  },
  "admin.projects": {
    en: "Projects Management",
    uk: "Управління проектами"
  },
  "admin.addProject": {
    en: "Add Project",
    uk: "Додати проект"
  },
  "admin.editProject": {
    en: "Edit Project",
    uk: "Редагувати проект"
  },
  "admin.deleteProject": {
    en: "Delete Project",
    uk: "Видалити проект"
  },
  "admin.projectTitle": {
    en: "Project Title",
    uk: "Назва проекту"
  },
  "admin.projectType": {
    en: "Project Type",
    uk: "Тип проекту"
  },
  "admin.projectDescription": {
    en: "Project Description",
    uk: "Опис проекту"
  },
  "admin.projectImage": {
    en: "Project Image",
    uk: "Зображення проекту"
  },
  "admin.save": {
    en: "Save",
    uk: "Зберегти"
  },
  "admin.cancel": {
    en: "Cancel",
    uk: "Скасувати"
  },
  "admin.goToAdmin": {
    en: "Admin Panel",
    uk: "Панель адміністратора"
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
