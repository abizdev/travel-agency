import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbarList: {
          main: "Main",
          services: "Services",
          about: "About",
          contacts: "Contacts",
        },
        contactsBtn: "Contacts",
        headerTitle:
          "Open up new horizons with us. Your comfort is our priority",
        banner: {
          text: "Let’s Make Your Next Holiday",
          word: "Amazing",
        },
        category: {
          subTitle: "Services",
          title: "We Offer Best Services",
          tours: {
            gid: {
              title: "Guided Tours",
              descr:
                "Guides with the best reviews from clients in different countries",
            },
            price: {
              title: "Best prices for flights",
              descr: "We will select the most optimal flight option for you",
            },
            transport: {
              title: "Transportation ",
              descr:
                "All types of transportation from scooters to private jets",
            },
            medical: {
              title: "Medical insurance",
              descr:
                "We will provide different types of insurance depending on the type of visa and the country’s population",
            },
          },
        },
        specials: {
          subTitle: "Traveling around Uzbekistan",
          title: "Historical heritage of the Uzbek people",
          descr:
            "Historical and cultural tours to Uzbekistan offer a unique opportunity to immerse yourself in the rich heritage of the Great Silk Road and discover ancient cities, mausoleums, mosques and unique architectural monuments. Travelers can visit historical sites such as Registan Square, Gur Emir Mausoleum, Shahi Zinda Necropolis and other attractions to immerse themselves in the rich culture and history of this amazing country.",
        },
        booking: {
          subTitle: "Fast & Easy",
          title: "Get reservations for your favorite resorts",
          services: {
            place: {
              title: "Choose a place",
              descr:
                "We provide visa support, tours to any corner of the world",
            },
            date: {
              title: "Choose a date",
              descr:
                "We will tell you what time of year to which country to fly to",
            },
            letsGo: {
              title: "Let's go",
              descr: "You'll be going on tour with us sooner than you thought",
            },
          },
        },
        promotion: {
          subTitle: "Special offers for romantic trips",
          title: "Our Romantic Tropical Travel Destinations",
          descr:
            'Our tours offer luxurious hotels with ocean views, candlelit dinners by the sea, romantic walks under the stars and much more. We take care of every smallest detail to ensure that your journey is filled with tenderness and admiration. Trust us and we will create for you a romantic adventure that will be remembered for a lifetime. Immerse yourself in a world of love and beauty with our romantic tours"',
        },
      },
    },
    ru: {
      translation: {
        navbarList: {
          main: "Главная",
          services: "Услуги",
          about: "О нас",
          contacts: "Контакты",
        },
        contactsBtn: "Контакты",
        headerTitle:
          "Открывайте новые горизонты вместе с нами. Ваш комфорт – наш приоритет",
        banner: {
          text: "Давайте сделаем ваш следующий отпуск",
          word: "Потрясающим",
        },
        category: {
          subTitle: "Услуги",
          title: "Мы предлагаем Вам лучшие услуги",
          tours: {
            gid: {
              title: "Туры с гидами",
              descr: "Гиды с лучшими отзывами от клиентов в разных странах",
            },
            price: {
              title: "Лучшие цены на перелёты",
              descr: "Мы для Вас подберем самый оптимальный вариант перелетов",
            },
            transport: {
              title: "Транспортировка ",
              descr: "Все виды передвижения от скутеров до частных самолётов",
            },
            medical: {
              title: "Медицинская страховка",
              descr:
                "Сделаем разные типы страховок исходя от типы визы и контингента страны ",
            },
          },
        },
        specials: {
          subTitle: "Путешествия по Узбекистану",
          title: "Исторические достояния Узбекского народа",
          descr:
            "Исторические и культурные туры в Узбекистан предлагают уникальную возможность погрузиться в богатое наследие Великого Шелкового Пути и открыть для себя древние города, мавзолеи, мечети и уникальные архитектурные памятники. Путешественники могут посетить такие исторические места, как Площадь Регистан, Мавзолей Гур-Эмир, Некрополь Шахи-Зинда и другие достопримечательности, чтобы погрузиться в богатую культуру и историю этой удивительной страны",
        },
        booking: {
          subTitle: "Быстро & Легко",
          title: "Получите бронирование любимых курортов",
          services: {
            place: {
              title: "Выберете место",
              descr:
                "Мы предоставляем визовую поддержку, туры в любой угол мира",
            },
            date: {
              title: "Выберете дату",
              descr: "Мы подскажем в какое время года в какую страну лететь",
            },
            letsGo: {
              title: "Поехали",
              descr: "Вы отправитесь в тур с нами раньше, чем вы думали",
            },
          },
        },
        promotion: {
          subTitle: "Специальные предложения для романтических поездок",
          title: "Наши романтические тропические направления поездок",
          descr:
            "Наши туры предлагают роскошные отели с видом на океан, ужины при свечах на берегу моря, романтические прогулки под звездным небом и многое другое. Мы заботимся о каждой мельчайшей детали, чтобы ваше путешествие было наполнено нежностью и восхищением. Доверьтесь нам, и мы создадим для вас романтическое приключение, которое запомнится на всю жизнь. Погрузитесь в мир любви и красоты с нашими романтическими турами»",
        },
      },
    },
    uz: {
      translation: {
        navbarList: {
          main: "Uy",
          services: "Xizmatlar",
          about: "Biz haqimizda",
          contacts: "Kontaktlar",
        },
        contactsBtn: "Kontaktlar",
        headerTitle:
          "Biz bilan yangi ufqlarni oching. Sizning qulayligingiz bizning ustuvor vazifamizdir",
        banner: {
          text: "Keling, keyingi ta'tilingizni o'tkazaylik",
          word: "Ajoyib",
        },
        category: {
          subTitle: "Xizmatlar",
          title: "Biz sizga eng yaxshi xizmatlarni taklif etamiz",
          tours: {
            gid: {
              title: "Yo'lboshchili ekskursiyalar",
              descr: "Turli mamlakatlardagi mijozlarning eng yaxshi sharhlari bilan qo'llanmalar",
            },
            price: {
              title: "Parvozlar uchun eng yaxshi narxlar",
              descr: "Biz siz uchun eng yaxshi parvoz variantini tanlaymiz",
            },
            transport: {
              title: "Transport",
              descr: "Skuterlardan shaxsiy samolyotlargacha bo'lgan barcha transport turlari",
            },
            medical: {
              title: "Tibbiy sug'urta",
              descr:
                "Biz viza turiga va mamlakat aholisiga qarab har xil sug'urta turlarini qilamiz",
            },
          },
        },
        specials: {
          subTitle: "O'zbekiston bo'ylab sayohat",
          title: "O'zbek xalqining tarixiy merosi",
          descr:
            "O‘zbekistonga tarixiy va madaniy sayohatlar Buyuk Ipak yo‘lining boy merosiga sho‘ng‘ish, qadimiy shaharlar, maqbaralar, masjidlar va noyob me’moriy yodgorliklarni kashf qilish uchun noyob imkoniyat yaratadi. Sayohatchilar Registon maydoni, Gur Amir maqbarasi, Shohi Zinda nekropoli va boshqa diqqatga sazovor joylarga tashrif buyurib, bu ajoyib mamlakatning boy madaniyati va tarixi bilan tanishishlari mumkin.",
        },
        booking: {
          subTitle: "Tez va oson",
          title: "Sevimli kurortlaringiz uchun bron qiling",
          services: {
            place: {
              title: "Joyni tanlang",
              descr:
                "Biz viza yordamini, dunyoning istalgan burchagiga sayohatlarni taqdim etamiz",
            },
            date: {
              title: "Sana tanlang",
              descr: "Yilning qaysi vaqtida qaysi mamlakatga uchish kerakligini sizga aytib beramiz",
            },
            letsGo: {
              title: "Kettik",
              descr: "Siz o'ylaganingizdan ham tezroq biz bilan gastrollarga chiqasiz",
            },
          },
        },
        promotion: {
          subTitle: "Romantik sayohatlar uchun maxsus takliflar",
          title: "Bizning romantik tropik sayohat joylarimiz",
          descr:
            "Bizning turlarimiz okean manzarali hashamatli mehmonxonalarni, dengiz bo'yida sham yorug'ida kechki ovqatlarni, yulduzlar ostida romantik yurishlarni va boshqa ko'p narsalarni taklif qiladi. Sayohatingiz muloyimlik va hayratga to'lishi uchun biz har bir mayda detalga e'tibor beramiz. Bizga ishoning va biz siz uchun bir umr esda qoladigan romantik sarguzasht yaratamiz. Bizning romantik sayohatlarimiz bilan sevgi va go'zallik olamiga sho'ng'in»",
        },
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
