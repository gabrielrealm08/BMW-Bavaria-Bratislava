import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        models: "Models",
        offers: "Offers",
        services: "Services & Servicing",
        about: "About Us",
        contact: "Contact"
      },
      hero: {
        headline1: "Innovation.",
        headline2: "Performance.",
        headline3: "Driving Excellence.",
        subheadline: "Official BMW Partner in Slovakia",
        exploreModels: "Explore Models",
        bookTestDrive: "Book a Test Drive",
        contactSales: "Contact Sales"
      },
      quickActions: {
        viewInventory: "View Inventory",
        bookService: "Book Service",
        chatAdvisor: "Chat with Advisor",
        findUs: "Find Us"
      },
      about: {
        title: "About Bavaria Bratislava",
        subtitle: "Your Trusted BMW Partner Since 1995",
        mission: "We are dedicated to delivering the ultimate driving experience through exceptional service, premium vehicles, and unparalleled customer care.",
        history: "For over 25 years, BMW Bavaria Bratislava has been the premier destination for luxury automotive excellence in Slovakia."
      },
      services: {
        title: "Ownership & Services",
        financing: "Financing",
        leasing: "Leasing",
        insurance: "Insurance",
        maintenance: "Maintenance",
        warranty: "Warranty"
      },
      testimonials: {
        title: "What Our Customers Say"
      },
      footer: {
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        rights: "All rights reserved"
      }
    }
  },
  sk: {
    translation: {
      nav: {
        models: "Modely",
        offers: "Ponuky",
        services: "Služby a Servis",
        about: "O Nás",
        contact: "Kontakt"
      },
      hero: {
        headline1: "Inovácia.",
        headline2: "Výkon.",
        headline3: "Dokonalosť v Jazde.",
        subheadline: "Oficiálny BMW Partner na Slovensku",
        exploreModels: "Preskúmať Modely",
        bookTestDrive: "Rezervovať Skúšobnú Jazdu",
        contactSales: "Kontaktovať Predaj"
      },
      quickActions: {
        viewInventory: "Zobraziť Inventár",
        bookService: "Rezervovať Servis",
        chatAdvisor: "Chat s Poradcom",
        findUs: "Nájsť Nás"
      },
      about: {
        title: "O Bavaria Bratislava",
        subtitle: "Váš Dôveryhodný BMW Partner Od Roku 1995",
        mission: "Sme odhodlaní poskytovať najlepší jazdný zážitok prostredníctvom výnimočného servisu, prémiových vozidiel a bezkonkurenčnej starostlivosti o zákazníkov.",
        history: "Viac ako 25 rokov je BMW Bavaria Bratislava prvoradou destináciou pre luxusnú automobilovú dokonalosť na Slovensku."
      },
      services: {
        title: "Vlastníctvo a Služby",
        financing: "Financovanie",
        leasing: "Lízing",
        insurance: "Poistenie",
        maintenance: "Údržba",
        warranty: "Záruka"
      },
      testimonials: {
        title: "Čo Hovoria Naši Zákazníci"
      },
      footer: {
        privacy: "Ochrana Súkromia",
        terms: "Podmienky Používania",
        rights: "Všetky práva vyhradené"
      }
    }
  },
  de: {
    translation: {
      nav: {
        models: "Modelle",
        offers: "Angebote",
        services: "Service & Wartung",
        about: "Über Uns",
        contact: "Kontakt"
      },
      hero: {
        headline1: "Innovation.",
        headline2: "Leistung.",
        headline3: "Fahrfreude.",
        subheadline: "Offizieller BMW Partner in der Slowakei",
        exploreModels: "Modelle Erkunden",
        bookTestDrive: "Probefahrt Buchen",
        contactSales: "Verkauf Kontaktieren"
      },
      quickActions: {
        viewInventory: "Inventar Anzeigen",
        bookService: "Service Buchen",
        chatAdvisor: "Chat mit Berater",
        findUs: "Uns Finden"
      },
      about: {
        title: "Über Bavaria Bratislava",
        subtitle: "Ihr Vertrauenswürdiger BMW Partner Seit 1995",
        mission: "Wir sind bestrebt, das ultimative Fahrerlebnis durch außergewöhnlichen Service, Premium-Fahrzeuge und unübertroffene Kundenbetreuung zu liefern.",
        history: "Seit über 25 Jahren ist BMW Bavaria Bratislava das führende Ziel für luxuriöse Automobilexzellenz in der Slowakei."
      },
      services: {
        title: "Eigentum & Dienstleistungen",
        financing: "Finanzierung",
        leasing: "Leasing",
        insurance: "Versicherung",
        maintenance: "Wartung",
        warranty: "Garantie"
      },
      testimonials: {
        title: "Was Unsere Kunden Sagen"
      },
      footer: {
        privacy: "Datenschutz",
        terms: "AGB",
        rights: "Alle Rechte vorbehalten"
      }
    }
  },
  hu: {
    translation: {
      nav: {
        models: "Modellek",
        offers: "Ajánlatok",
        services: "Szolgáltatások és Szerviz",
        about: "Rólunk",
        contact: "Kapcsolat"
      },
      hero: {
        headline1: "Innováció.",
        headline2: "Teljesítmény.",
        headline3: "Vezetési Kiválóság.",
        subheadline: "Hivatalos BMW Partner Szlovákiában",
        exploreModels: "Modellek Felfedezése",
        bookTestDrive: "Próbaút Foglalása",
        contactSales: "Értékesítés Elérése"
      },
      quickActions: {
        viewInventory: "Készlet Megtekintése",
        bookService: "Szerviz Foglalása",
        chatAdvisor: "Chat Tanácsadóval",
        findUs: "Megtalálni Minket"
      },
      about: {
        title: "A Bavaria BratislavaRól",
        subtitle: "Megbízható BMW Partnerünk 1995 Óta",
        mission: "Elkötelezettek vagyunk a végső vezetési élmény nyújtása iránt kivételes szolgáltatás, prémium járművek és páratlan ügyfélgondoskodás révén.",
        history: "Több mint 25 éve a BMW Bavaria Bratislava a luxus autóipari kiválóság elsődleges célpontja Szlovákiában."
      },
      services: {
        title: "Tulajdonlás és Szolgáltatások",
        financing: "Finanszírozás",
        leasing: "Lízing",
        insurance: "Biztosítás",
        maintenance: "Karbantartás",
        warranty: "Garancia"
      },
      testimonials: {
        title: "Mit Mondanak Ügyfeleink"
      },
      footer: {
        privacy: "Adatvédelmi Irányelvek",
        terms: "Felhasználási Feltételek",
        rights: "Minden jog fenntartva"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'sk',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
