export const textRU = {
    head: {
        meta: {
            og: {
                site_name: 'Веб-Разработка Unigi',
                description: 'Разработка веб-инструмента для улучшения продуктиваности вашего бизнеса.',
            },
            description: 'Разработка веб-инструмента для улучшения продуктивности вашего бизнеса.'
        },
        title: {
            main: 'Веб-Разработка unigi | Разработка веб-сайтов и сложных веб приложений',
            about: 'О нас | Unigi',
            service: 'Услуги | Unigi',
            privacyPolicy: 'Политика конфиденциальности'
        }
    },
    header: {
        menu: [
            { link: '/', text: 'Главная' },
            { link: '/service', text: 'Услуги', 
                // dropMenu: [
                //     { id: 'landing', link: '/service/landing', text: 'Лендинг' },
                //     { id: 'internet-shop', link: '/service/internet-shop', text: 'Интернет-Магазин' },
                //     { id: 'web-app', link: '/service/web-app', text: 'Веб-Приложение' }
                // ]
            },
            { link: '/about', text: 'О нас' },
        ],
        btnContact: {
            text: 'Связаться'
        },
        contacts: {
            email: {
                href: 'admin@unigi.ru'
            },
            telegram: {
                href: 'https://t.me/ALIWONKI'
            }
        }
    },
    formContact: {
        btnClose: 'Закрыть',
        btnSubmit: 'Отправить',
        labelAgree: 'Согласен с обработкой персональных данных',
        caption: 'Свяжитесь с нами',
        inputItems: [
            {  
                type: 'text',
                name: 'name',
                text: 'Ваше имя',
                placeholder: 'Антон'
            },
            {
                type: 'email',
                name: 'email',
                text: 'Ваш E-mail',
                placeholder: 'super@mail.com'
            },
            {
                type: 'number',
                name: 'phone',
                text: 'Ваш телефон',
                placeholder: '7 ХХХ-ХХХ-ХХХХ'
            },
            {
                type: 'text',
                name: 'comment',
                text: 'Комментарий',
                placeholder: 'Опишите ваш проект'
            }
        ]
    },
    privacyPolicy: {
        caption: 'Политика обработки персональных данных',
        listRules: [
            {
                caption: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
                description: `Я, Балдан Айдыш Петрович, далее unigi.ru, 
                уделяю большое внимание защите данных, которые вы мне предоставили.
                Настоящая политика обработки персональных данных составлена в соответствии 
                с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных». 
                Целями, для которых я собираю ваши персональные данные, являются: улучшение моего сервиса, 
                общение с посетителями сайта, предоставление услуг, а также для других действий, перечисленных ниже.`
            },
            {
                caption: 'ХРАНЕНИЕ И ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ',
                description: `Я собираю и обрабатываю ваши персональные 
                данные только с вашего добровольного согласия. С вашего разрешения 
                я могу собирать и обрабатывать следующие данные: имя, адрес электронной почты, номер телефона.`
            },
            {
                caption: 'ХРАНЕНИЕ ДАННЫХ, ИЗМЕНЕНИЕ И УДАЛЕНИЕ',
                description: `Пользователь, который предоставил 
                unigi.ru свои персональные данные, имеет право на их изменение и удаление,
                а также право отозвать договор на обработку данных. Срок, в течение которого 
                будут храниться ваши персональные данные, составляет 12 месяцев.`
            },
            {
                caption: 'ОБРАБОТКА COOKIES',
                description: `Я использую файлы cookie для корректного отображения 
                контента сайта и для удобства просмотра. Это небольшие файлы, которые 
                хранятся на вашем устройстве. Они помогают веб-сайту запоминать информацию о вас, 
                например, на каком языке вы используете веб-сайт и какие страницы вы уже открыли.`
            },
            {
                caption: 'ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ ДРУГИМИ СЛУЖБАМИ',
                description: 'Этот сайт использует сторонние онлайн-сервисы, которые осуществляют сбор данных независимо от меня. К таким сервисам относятся: Google Analytics, Яндекс Метрика.'
            }
        ]
    },
    banner: {
        caption: {
            text: 'Станьте с помощью web',
            words: [
                'продуктивным',
                'соврeменным',
                'продвинутым'
            ]
        }
    },
    services: {
        caption: 'Что мы делаем',
        description: 'Веб-разроботка: лендинг, интернет-магазин, веб-приложение',
        listService: [
            { 
                id: 'landing',
                href: '/service/landinig', 
                text: 'Лендинг', 
                description: `Создадим одностраничный сайт, 
                который презентует ваш продукт клиентам.
                Не требует разработки сложной архитектуры сайта.` 
            },
            { 
                id: 'internet-shop',
                href: '/service/internet-shop', 
                text: 'Интернет-Магазин', 
                description: `Сделаем форму электронной торговли,
                которая позволит вашим клиентам покупать
                товары и услуги с помощью веб-браузера.` 
            },
            { 
                id: 'web-app',
                href: '/service/web-app', 
                text: 'Веб-Приложение', 
                description: `Разработаем технически сложное приложение, 
                которое поможет в продуктивности вашему бизнесу.` 
            },

        ]
    },
    information: {
        caption: 'ближе к технологиям',
        description: 'Справочник по технологиям, которые автомизирует и помогает бизнесу.',
        technology: [
            {
                id: 'web-site',
                caption: 'Веб-Сайт',
                description: `
                Состоит из веб-страниц, объединенных друг с другом в единый ресурс. 
                Имеет простую архитектуру на основе HTML-кода. 
                Служат в качестве платформы для предоставления контента для посетителей.
                `
            },
            {
                id: 'web-app',
                caption: 'Веб-Приложение',
                description: `
                Интерактивные компьютерные приложения, 
                разработанные для сети интернет, позволяющие пользователям вводить, 
                получать и манипулировать данными с помощью взаимодействия.  
                `
            },
            {
                id: 'mobile-app',
                caption: 'Мобильное Приложение',
                description: `
                Это программный пакет, функционал и дизайн которого «заточен» 
                под возможности мобильных платформ. У мобильных приложений бывает разное назначение.
                Самые распространенные варианты такие: приложения интернет-магазинов, развлечения, 
                трекеры, различные сервисы и помощники.
                `
            },
            {
                id: 'desktop-app',
                caption: 'Десктоп Приложение',
                description: `
                Программа, которая устанавливается на компьютер пользователя 
                и работает под управлением операционной системы. 
                Такие приложения высокопроизводительные, могут работать напрямую с принтерами, 
                сканерами, факсами и прочей техникой.
                `
            }

        ]
    },
    footer: {
        menuService: {
            caption: 'Услуги',
            listService: [
                { 
                    id: 'landing',
                    href: '/service/landinig', 
                    text: 'Лендинг', 
                },
                { 
                    id: 'internet-shop',
                    href: '/service/internet-shop', 
                    text: 'Интернет-Магазин', 
                },
                { 
                    id: 'web-app',
                    href: '/service/web-app', 
                    text: 'Веб-Приложение', 
                },
    
            ]
        },
        contacts: {
            caption: 'Контакты',
            email: {
                href: 'admin@unigi.ru',
                text: 'admin@unigi.ru'
            },
            telegram: {
                href: 'https://t.me/ALIWONKI'
            }
        }
    },
    servicePage:{
        caption: 'Услуги',
        home: 'Главная',
        atTheMoment: 'Услуги',
        price: 'Расчитать стоимость',
        description: 'Рассчитайте стоимость разработки сайта онлайн',
        button: 'Рассчитать стоимость',
        help: {
            caption: 'Помочь выбрать?',
            inputItems: [
                {  
                    type: 'text',
                    name: 'name',
                    text: 'Ваше имя',
                    placeholder: 'Антон'
                },
                {
                    type: 'email',
                    name: 'email',
                    text: 'Ваш E-mail',
                    placeholder: 'super@mail.com'
                },
                {
                    type: 'number',
                    name: 'phone',
                    text: 'Ваш телефон',
                    placeholder: '7 ХХХ-ХХХ-ХХХХ'
                },
                
            ],
            button: 'Отправить'
        },
        consultation: {
            caption: 'Закажите консультацию по проекту!',
            name: 'Имя',
            telephone: 'Телефон',
            button: 'Отправить',
            agreement_one: '*Нажимая кнопку вы принимаете ',
            agreement_two: 'Соглашение об обработке персональных данных'
        },
        listService: [
            { 
                id: 'landing',
                text: 'Лендинг', 
                description: `Создадим одностраничный сайт, 
                который презентует ваш продукт клиентам.
                Не требует разработки сложной архитектуры сайта.`,
                
                
                
            },
            { 
                id: 'internet-shop',
                text: 'Интернет-Магазин', 
                description: `Сделаем форму электронной торговли,
                которая позволит вашим клиентам покупать
                товары и услуги с помощью веб-браузера.` ,
                
            },
            { 
                id: 'web-app',
                text: 'Веб-Приложение', 
                description: `Разработаем технически сложное приложение, 
                которое поможет в продуктивности вашему бизнесу.`,
                
            },
            

        ],
        HowWeDevelop:{
            caption: 'Как разрабатываем',
            ExploreFirst: 'Сначала исследуем',
            ExploreFirst_description:'Перед началом разработки мы тщательно исследуем конкурентные ресурсы и выделяем удачные и не очень решения. Именно за счет исследования разрабатывается удобный и простой интерфейс.',
        },
        ThenWeDevelop:{
            caption: 'Затем разрабатываем',
            subsequence:[
                {
                    id: 'Front-end',
                    caption: 'Front-end',
                    description: 'Создаем удобный и эффектный интерактив, который оставляет только положительные эмоции.',
                },
                {
                    id: 'Back-end',
                    caption: 'Back-end',
                    description: 'Настроим верстку на CMS. Сделаем ресурс полностью редактируемым. Проектируем удобную админ. панель.',
                },
                {
                    id: 'TestingAndLaunch',
                    caption: 'Тестирование и запуск',
                    description: 'Тестируем, исправляем все недочеты и запускаем сервис.',
                },
                
            ],
        },
        developmentCost:{
            developmentCost_caption:'Стоимость разработки',
            developmentCost_text_one:'Мы приводим примерные суммы разработки в зависимости от тематики.',
            name: 'Услуги',
            developmentCost_text_two:'Стоимость разработки зависит от функционала будущего веб-приложения и от сложности и эргономики его интерфейса.',
            price: 'Стоимость',
            term: 'Срок',
            developmentCost_button_text_one: 'Оставить ',
            developmentCost_button_text_two: 'заявку',
            subsequence:[
                {
                    id: 'landing',
                    name: 'Лендинг',
                    price: 'от 10 000 ₽',
                    term: 'от 7 дней',
                },
                {
                    id: 'internet-shop',
                    name: 'Internet-shop',
                    price: 'от 60 000 ₽',
                    term: 'от 1 месяц',
                },
                {
                    id: 'web-app',
                    name: 'Веб-приложение',
                    price: 'от 120 000 ₽',
                    term: 'от 1,5 месяц',
                },
            ]
        },
        technology:{
            technology_caption: 'Технологии',
            technology_frontend_caption: 'Frontend:',
            technology_backend_caption: 'Backend:',
            technology_frontend:[
                {
                    id: 'html',
                    name: 'html',
                },
                {
                    id: 'Css/Sass',
                    name: 'Css/Sass',
                },
                {
                    id: 'javaScript/TypeScript',
                    name: 'javaScript/TypeScript',
                },
                {
                    id: 'React/Next',
                    name: 'React/Next',
                },
                {
                    id: 'Webpack',
                    name: 'Webpack',
                },
            ],
            technology_backend:[
                {
                    id: 'NodeJS',
                    name: 'NodeJS',
                },
                {
                    id: 'Express',
                    name: 'Express',
                },
                {
                    id: 'NestJS',
                    name: 'NestJS',
                },
                {
                    id: 'MySql',
                    name: 'MySql',
                },
                {
                    id: 'MongoDB',
                    name: 'MongoDB',
                },
                {
                    id: 'Git',
                    name: 'Git',
                },
            ]
        }
    },
    aboutPage: {
        banner: 'Разрабатываем Веб-Приложения',
        infDev: {
            caption: 'Независимые Разработчики',
            description: `Обычные парни, которые разрабатывают индивидуальные проекты на языке программировании JavaScript для бизнеса. Команда состоит из двух человек: Fullstack-разрабочтика и HTML-Верстальщика.`
        },
        elementsInformation: [
            {
                caption: 'Независимые разработчики',
                description: `
                    Обычные парни, которые разрабатывают 
                    индивидуальные проекты на языке программировании 
                    JavaScript для бизнеса.
                `
            },
            {
                caption: 'Наш приоритет - долгосрочная работа',
                description: `
                    Выстраиваем доверительные отношения с 
                    клиентами, поэтому мы ответственно подходим 
                    к работе.
                `
            }
        ]
    }
};


export const textEN = {
    head: {
        meta: {
            og: {
                site_name: 'Web Development Unigi',
                description: 'Development of a web tool to improve the productivity of your business.',
            },
            description: 'Development of a web tool to improve the productivity of your business.'
        },
        title: {
            main: 'Web development unigi | Development of websites and complex web applications',
            about: 'About Us | Unigi',
            service: 'Service | Unigi',
            privacyPolicy: 'Privacy Policy'
        }
    },
    header: {
        menu: [
            { link: '/', text: 'Main' },
            { link: '/service',  text: 'Service', dropMenu: [
                { id: 'landing', link: '/service/landing', text: 'Lending' },
                { id: 'internet-shop', link: '/service/internet-shop', text: 'Internet-Shop' },
                { id: 'web-app', link: '/service/web-app', text: 'Web-App' }
            ]},
            { link: '/about', text: 'About' },
        ],
        btnContact: {
            text: 'Contact'
        },
        contacts: {
            email: {
                href: 'admin@unigi.ru'
            },
            telegram: {
                href: 'https://t.me/ALIWONKI'
            }
        }
    },
    formContact: {
        btnClose: 'Close',
        btnSubmit: 'Send',
        labelAgree: 'I agree with processing of personal data',
        caption: 'Contact Us',
        inputItems: [
            {
                type: 'text',
                name: 'name',
                text: 'Your name',
                placeholder: 'Bob'
            },
            {
                type: 'email',
                name: 'email',
                text: 'Your E-Mail',
                placeholder: 'super@mail.com'
            },
            {
                type: 'number',
                name: 'phone',
                text: 'Your Phone',
                placeholder: '+1 ХХХ-ХХХ-ХХХХ'
            },
            {
                type: 'text',
                name: 'comment',
                text: 'Comment',
                placeholder: 'Describe your project'
            }
        ]
    },
    privacyPolicy: {
        caption: 'Политика обработки персональных даннх',
        listRules: [
            {
                caption: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
                description: `Я, Балдан Айдыш Петрович, далее unigi.ru, 
                уделяю большое внимание защите данных, которые вы мне предоставили.
                Настоящая политика обработки персональных данных составлена в соответствии 
                с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных». 
                Целями, для которых я собираю ваши персональные данные, являются: улучшение моего сервиса, 
                общение с посетителями сайта, предоставление услуг, а также для других действий, перечисленных ниже.`
            },
            {
                caption: 'ХРАНЕНИЕ И ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ',
                description: `Я собираю и обрабатываю ваши персональные 
                данные только с вашего добровольного согласия. С вашего разрешения 
                я могу собирать и обрабатывать следующие данные: имя, адрес электронной почты, номер телефона.`
            },
            {
                caption: 'ХРАНЕНИЕ ДАННЫХ, ИЗМЕНЕНИЕ И УДАЛЕНИЕ',
                description: `Пользователь, который предоставил 
                unigi.ru свои персональные данные, имеет право на их изменение и удаление,
                а также право отозвать договор на обработку данных. Срок, в течение которого 
                будут храниться ваши персональные данные, составляет 12 месяцев.`
            },
            {
                caption: 'ОБРАБОТКА COOKIES',
                description: `Я использую файлы cookie для корректного отображения 
                контента сайта и для удобства просмотра. Это небольшие файлы, которые 
                хранятся на вашем устройстве. Они помогают веб-сайту запоминать информацию о вас, 
                например, на каком языке вы используете веб-сайт и какие страницы вы уже открыли.`
            },
            {
                caption: 'ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ ДРУГИМИ СЛУЖБАМИ',
                description: 'Этот сайт использует сторонние онлайн-сервисы, которые осуществляют сбор данных независимо от меня. К таким сервисам относятся: Google Analytics, Яндекс Метрика.'
            }
        ]
    },
    banner: {
        caption: {
            text: 'Become with us',
            words: [
                'productive',
                'modern',
                'advenced'
            ]
        }
    },
    services: {
        caption: 'What are we doing',
        description: 'Web development: landing page, internet shop, web application',
        listService: [
            {
                id: 'landing',
                href: '/service/landinig',
                text: 'Landing',
                description: `Let's create a one-page site,
                who presents your product to customers.
                Does not require the development of a complex site architecture.`
            },
            {
                id: 'internet-shop',
                href: '/service/internet-shop',
                text: 'Internet Shop',
                description: `Let's make an e-commerce form,
                that will allow your customers to buy
                goods and services using a web browser.`
            },
            {
                id: 'web-app',
                href: '/service/web-app',
                text: 'Web Application',
                description: `Let's develop a technically complex application,
                which will help in the productivity of your business.`
            },

        ]
    },
    information: {
        caption: 'closer to technology',
        description: 'A guide to technologies that automate and help businesses.',
        technology: [
            {
                id: 'web-site',
                caption: 'Website',
                description: `
                Consists of web pages combined with each other into a single resource.
                It has a simple architecture based on HTML code.
                Serve as a platform to provide content to visitors.
                `
            },
            {
                id: 'web-app',
                caption: 'Web Application',
                description: `
                interactive computer applications,
                designed for the Internet, allowing users to enter,
                receive and manipulate data through interaction.
                `
            },
            {
                id: 'mobile-app',
                caption: 'Mobile Application',
                description: `
                This is a software package, the functionality and design of which is “sharpened”
                under the capabilities of mobile platforms. Mobile apps have different purposes.
                The most common options are: applications of online stores, entertainment,
                trackers, various services and assistants.
                `
            },
            {
                id: 'desktop-app',
                caption: 'Desktop Application',
                description: `
                A program that is installed on the user's computer
                and runs under the operating system.
                Such applications are high-performance, can work directly with printers,
                scanners, faxes and other equipment.
                `
            }

        ]
    },
    footer: {
        menuService: {
            caption: 'Service',
            listService: [
                { 
                    id: 'landing',
                    href: '/service/landinig', 
                    text: 'Landing', 
                },
                { 
                    id: 'internet-shop',
                    href: '/service/internet-shop', 
                    text: 'Internet-shop', 
                },
                { 
                    id: 'web-app',
                    href: '/service/web-app', 
                    text: 'Web-app', 
                },
    
            ]
        },
        contacts: {
            caption: 'Contacts',
            email: {
                href: 'admin@unigi.ru',
                text: 'admin@unigi.ru'
            },
            telegram: {
                href: 'https://t.me/ALIWONKI'
            }
        }
    },
    aboutPage: {
        elementsInformation: [
            {
                caption: 'Freelance developers',
                description: `
                    Ordinary guys who develop
                    individual projects in a programming language
                    JavaScript for business.
                `
            },
            {
                caption: 'Our priority - long-term work',
                description: `
                    Building a trusting relationship with
                    clients, so we take a responsible approach
                    to work and achieve our goals.
                `
            }
        ]
    }
};