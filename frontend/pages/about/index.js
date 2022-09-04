import Head from "next/head";
import Image from 'next/image';
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import anime from 'animejs';
import styles from '../../styles/About.module.sass'
import srcImgCoder from '../../assets/img/Coder.svg';
import srcImgService from '../../assets/img/Service.svg';
import srcImgSupport from '../../assets/img/Support.svg';

export default function About() {
    const text = useSelector(state => state.language.text);
    const imgRefCoder = useRef();
    const imgRefSupport = useRef();
    const descImgCoder = useRef();
    const descImgSupport = useRef();


    useEffect(() => {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                
                if(entry.isIntersecting) {

                    anime({
                        targets: entry.target,
                        translateY: [-100, 0],
                        opacity: [0, 1],
                        scale: [0, 1.5],
                        duration: 3000
                    });
            
                    anime({
                        targets: entry.target.nextElementSibling,
                        translateX: [-40, 0],
                        translateZ: 0,
                        rotate: [15, 0],
                        opacity: [0, 1],
                        duration: 2000
                    });

                }
            });
        });

        observer.observe(imgRefCoder.current);
        observer.observe(imgRefSupport.current);

    }, []);


    function ElementsInformations() {
        const imgs = [srcImgCoder, srcImgSupport];
        const refs = [imgRefCoder, imgRefSupport];

        return text.aboutPage.elementsInformation.map((value, index) => {
            return(
                <div
                    className={styles.listEl}
                    key={index}
                >
                    <h1 
                        className={styles.caption}
                        // key={index}
                    >
                        {value.caption}
                    </h1>
                    <div 
                        className={styles.information}
                        // key={index}       
                    >
                        <div
                            className={styles.img}
                            ref={refs[index]}
                        >
                            <Image 
                                src={imgs[index]}
                                width={250}
                                height={250}
                                alt='icon'
                            />
                        </div>
                        <div 
                            className={styles.description}
                        >
                            {value.description}
                        </div>
                    </div>
                </div>

            )
        });
    }

    return (
        <>
            <Head>
                <title>{text.head.title.about}</title>
            </Head>
            <div className={styles.about}>
                <ElementsInformations />
                {/* <h1 className={styles.caption}>
                    Независимые разработчики
                </h1>
                <div className={styles.information}>
                    <div
                        className={styles.img}
                        ref={imgRefCoder}
                    >
                        <Image 
                            src={srcImgCoder}
                            width={250}
                            height={250}
                            alt='icon development'
                        />
                    </div>
                    <div 
                        className={styles.description}
                        ref={descImgCoder}
                    >
                        Обычные парни, которые разрабатывают индивидуальные проекты на языке программировании JavaScript для бизнеса.
                    </div>
                </div>

                <h1 className={styles.caption}>
                    Наш приоритет - долгосрочная работа
                </h1>
                <div className={styles.information}>
                    <div
                        className={styles.img}
                        ref={imgRefSupport}
                    >
                        <Image 
                            src={srcImgSupport}
                            width={250}
                            height={250}
                            alt='icon support'
                        />
                    </div>
                    <div 
                        className={styles.description}
                        ref={descImgSupport}
                    >
                        Выстраиваем доверительные отношения с клиентами, поэтому мы ответственно подходим к работе и достигаем поставленных задач.
                    </div>
                </div> */}
            </div>
        </>
    )
}