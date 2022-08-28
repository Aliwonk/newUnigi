export const textRU = {
    header: {
        menu: [
            { link: '/about', text: 'О нас' },
            { link: '/service', text: 'Услуги', dropMenu: [
                { id: 'landing', link: '/service/landing', text: 'Лендинг' },
                { id: 'internet-shop', link: '/service/internet-shop', text: 'Интернет-Магазин' },
                { id: 'web-app', link: '/service/web-app', text: 'Веб-Приложение' }
            ]},
            { link: '/contacts', text: 'Контакты' }
        ],
        btnContact: {
            text: 'Связаться'
        }
    },
    banner: {
        caption: {
            text: 'Станьте с помощью web',
            words: [
                'продуктивным',
                'соврeменным',
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
                href: '',
                text: 'super@mail.com'
            },
            telegram: {
                href: ''
            }
        }
    }
};


export const textEN = {
    header: {
        menu: [
            { link: '/about', text: 'About' },
            { link: '/service',  text: 'Service', dropMenu: [
                { id: 'landing', link: '/service/landing', text: 'Lending' },
                { id: 'internet-shop', link: '/service/internet-shop', text: 'Internet-Shop' },
                { id: 'web-app', link: '/service/web-app', text: 'Web-App' }
            ]},
            { link: '/contacts', text: 'Contacts' }
        ],
        btnContact: {
            text: 'Contact'
        }
    },
    banner: {
        caption: {
            text: 'Become with us',
            words: [
                'productive',
                'modern',
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
            email: '',
            telegram: ''
        }
    }
};