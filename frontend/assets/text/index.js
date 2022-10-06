export const textRU = {
    head: {
        meta: {
            og: {
                site_name: 'Веб-Разработка Unigi',
                description: 'Разработка веб-инструмента для улучшения продуктиваности вашего бизнеса.',
            },
            description: 'Разработка веб-инструмента для улучшения продуктивности вашего бизнеса.',
            keywords: 'Веб-Разработка, Сайты, Разработчики, Html, Css, JavaScript,'
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
                description: `Сайт unigi.ru уделяет большое внимание защите данных, которые вы предоставили.
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
                href: '/service', 
                text: 'Лендинг', 
                description: `Создадим одностраничный сайт, 
                который презентует ваш продукт клиентам.
                Не требует разработки сложной архитектуры сайта.` 
            },
            { 
                id: 'internet-shop',
                href: '/service', 
                text: 'Интернет-Магазин', 
                description: `Сделаем форму электронной торговли,
                которая позволит вашим клиентам покупать
                товары и услуги с помощью веб-браузера.` 
            },
            { 
                id: 'web-app',
                href: '/service', 
                text: 'Веб-Приложение', 
                description: `Разработаем технически сложное приложение, 
                которое поможет в продуктивности вашему бизнесу.` 
            },
            { 
                id: 'mobile-app',
                href: '/service', 
                text: 'Мобильное приложение', 
                description: `Разработаем приложение заточеный под мобильные устройство. 
                Такое приложение упростит жизнь вашему клиенту и оптимизирует ваш бизнес.` 
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
        banner: {
            caption: 'Веб-Разработка',
        },
        goods: {
            caption: 'Продукты, которые мы разрабатываем',
            list: [
                {
                    caption: 'Лендинг',
                    description: 'Создадим одностраничный сайт, который презентует ваш продукт клиентам. Не требует разработки сложной архитектуры сайта'
                },
                {
                    caption: 'Интернет-Магазин',
                    description: 'Сделаем форму электронной торговли, которая позволит вашим клиентам покупать товары и услуги с помощью веб-браузера'
                },
                {
                    caption: 'Веб-Приложение',
                    description: 'Разработаем технически сложное приложение, которое поможет в продуктивности вашему бизнесу.'
                },
                {
                    caption: 'Мобильное приложение',
                    description: 'Разработаем приложение заточеный под мобильные устройство. Такое приложение упростит жизнь вашему клиенту и оптимизирует ваш бизнес'
                }
            ]
        },
        stageDev: {
            caption: 'Как разрабатывем',
            stage: [
                {
                    caption: 'Front-end',
                    description: 'Создаем внешний вид и интерактив приложения, который будет удобынм для пользователя'
                },
                {
                    caption: 'Back-end',
                    description: 'Разарабатываем внутренную часть сайта, который будет взаимодейстовать с frontend'
                },
                {
                    caption: 'Тестирование и запуск',
                    description: 'Исправляем недочеты и запускаем приложение'
                },
            ]
        },
        price: {
            head: {
                caption: 'Стоимость разработки',
                disclaimer: 'Стоимость разработки зависит от функционала приложения и от сложности его интерфейса. Цены указаны приблизительные'
            },
            listPrice: [
                {
                    caption: 'Лендинг',
                    price: '~ 15 000'
                },
                {
                    caption: 'Интернет-Магазин',
                    price: '~ 40 000'
                },
                {
                    caption: 'Веб-Приложение',
                    price: '~ 60 000'
                },
                {
                    caption: 'Мобильное приложение',
                    price: '~ 100 000'
                }
            ]
        }, 
        technology: {
                frontend: [
                    {
                        text: 'html',
                    },
                    {
                        text: 'Css/Sass',
                    },
                    {
                        text: 'javaScript',
                    },
                    {
                        text: 'React/Next',
                    },
                    {
                        text: 'Webpack',
                    },
                ],
                backend: [
                    {
                        text: 'NodeJS',
                    },
                    {
                        text: 'Express',
                    },
                    {
                        text: 'NestJS',
                    },
                    {
                        text: 'MySql',
                    },
                    {
                        text: 'MongoDB',
                    },
                ]
        },
    },
    aboutPage: {
        banner: 'Разрабатываем Веб-Приложения',
        infDev: {
            caption: 'Независимые Разработчики',
            description: `Обычные парни, которые разрабатывают индивидуальные проекты на языке программировании JavaScript для бизнеса. Команда состоит из двух человек: Fullstack-разрабочтика и HTML-Верстальщика.`
        },
    }
};


export const textEN = {
    head: {
        meta: {
            og: {
                site_name: 'Web Development Unigi',
                description: 'Development of a web tool to improve the productivity of your business.',
            },
            description: 'Development of a web tool to improve the productivity of your business.',
            keywords: 'Web Development, Sites, Development, Html, Css, JavaScript,'
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
                description: `Cайт unigi.ru, 
                уделяет большое внимание защите данных, которые вы предоставили.
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
            { 
                id: 'mobile-app',
                href: '/service', 
                text: 'Mobile Application', 
                description: `We will develop an application tailored for mobile devices.
                Such an application will simplify the life of your client and optimize your business.` 
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
    servicePage: {
        banner: {
            caption: 'Web-development',
        },
        technology: {
            frontend: [
                {
                    text: 'html',
                },
                {
                    text: 'Css/Sass',
                },
                {
                    text: 'javaScript',
                },
                {
                    text: 'React/Next',
                },
                {
                    text: 'Webpack',
                },
            ],
            backend: [
                {
                    text: 'NodeJS',
                },
                {
                    text: 'Express',
                },
                {
                    text: 'NestJS',
                },
                {
                    text: 'MySql',
                },
                {
                    text: 'MongoDB',
                },
            ]
        },
        goods: {
            caption: 'Products that we develop',
            list: [
                {
                    caption: 'Landing',
                    description: 'We will create a one-page website that will present your product to clients. Does not require the development of complex website architecture'
                },
                {
                    caption: 'Internet-Shop',
                    description: 'Lets make an e-commerce form that will allow your customers to buy goods and services using a web browser'
                },
                {
                    caption: 'Web-App',
                    description: 'We will develop a technically complex application that will help your business to be more productive.'
                },
                {
                    caption: 'Mobile app',
                    description: `We will develop an application tailored for mobile devices. An app like this will make your customer's life easier and optimize your business`
                }
            ]
        },
        stageDev: {
            caption: 'How we develop',
            stage: [
                {
                    caption: 'Front-end',
                    description: 'We create the appearance and interactivity of the application, which will be user-friendly'
                },
                {
                    caption: 'Back-end',
                    description: 'We develop the internal part of the site that will interact with the frontend'
                },
                {
                    caption: 'Testing and launch',
                    description: 'Fixing bugs and launching the app'
                }
            ]
        },
        price: {
            head: {
                caption: 'Development cost',
                disclaimer: 'The cost of development depends on the functionality of the application and the complexity of its interface. Prices are approximate'
            },
            listPrice: [
                {
                    caption: 'Landing',
                    price: '~ 15 000'
                },
                {
                    caption: 'Internet-Shop',
                    price: '~ 40 000'
                },
                {
                    caption: 'Web Application',
                    price: '~ 60 000'
                },
                {
                    caption: 'Mobile Application',
                    price: '~ 100 000'
                }
            ]
        }, 
    },
    aboutPage: {
        banner: 'We develop web applications',
        infDev: {
            caption: 'Independent Developers',
            description: `Ordinary guys who develop individual projects in the JavaScript programming language for business. The team consists of two people: Fullstack developer and HTML layout designer.`
        },
    }
};