import { useSelector } from "react-redux";
import Image from "next/image";
import Head from "next/head";
import anime from "animejs";
import styles from "../../styles/Service.module.sass";
import iconLanding from "../../assets/icons/lending.svg";
import iconInternetShop from "../../assets/icons/internet-shop.svg";
import iconWeb from "../../assets/icons/web-app.svg";
import right from "../../assets/icons/right.svg";
import { useRef } from "react";
import { useEffect } from "react";

function Service() {
  const text = useSelector((state) => state.language.text);
  const bannerTech = useRef();
  const bannerCaptionRef = useRef();
  const frontTechRef = useRef();
  const backTechRef = useRef();
  const decoreBannerCaptionRef = useRef();

  useEffect(() => {
    const observerCaptionBanner = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const letter = entry.target.childNodes[0].childNodes[0];
            anime({
                targets: `.${entry.target.className} .${letter.className}`,
                rotateY: [-90, 0],
                translateX: [-50, 0],
                opacity: [0, 1],
                duration: 1500,
                delay: (el, i) => 50 * i
            })
            anime({
              targets: `.${decoreBannerCaptionRef.current.className}`,
              scale: [0, 1],
              opacity: [0, 1],
              duration: 2300,
            })
        }
      });
    });
    const observerTech = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const translateX = window.innerWidth < 768 ? 150 : 550;
          anime({
            targets: `.${frontTechRef.current.className}`,
            translateX: [translateX, 0],
            translateY: [-100, 0],
            scale: [0.5, 1],
            opacity: [0, 1],
            duration: 2800,
          });
          anime({
            targets: `.${backTechRef.current.className}`,
            translateX: [translateX, 0],
            translateY: [100, 0],
            scale: [0.5, 1],
            opacity: [0, 1],
            duration: 2500,
            delay: 100,
          })
        }
      });
    });
    observerCaptionBanner.observe(bannerCaptionRef.current);
    observerTech.observe(bannerTech.current);
  }, []);

  function Letters(props) {
    const letter = props.text;
    const array = Array.from(letter);
    return array.map((value, index) => {
      return (
        <span 
          className={styles.letter}
          key={index} 
        >
          {value}
        </span>
      );
    });
  }

  function ListTech(props) {
      const tech = props.data;
      return tech.map((value, index) => {

          return(
            <div 
              className={styles.elTech}
              style={{
                marginTop: 25 + index * 5,
                marginLeft: window.innerWidth < 426 ? 15 + '%' : 25 + '%'
              }}
              key={index}
            >
              <h4>
                {value.text}
              </h4>
            </div>
          )
      });
  }
  return (
    <>
      <Head>
        <title>{text.head.title.service}</title>
      </Head>
      <div className={styles.service}>
        <div className={styles.banner}>
          <div className={styles.bannerCaptionBlock} >
            <div className={styles.decoreBannerCaption} ref={decoreBannerCaptionRef}></div>
            <h1 className={styles.bannerCaption} ref={bannerCaptionRef}>
              <span className={styles.text_wrapper}>
                <Letters text={text.servicePage.banner.caption} />
              </span>
            </h1>
          </div>
          <div className={styles.bannerTech} ref={bannerTech}>
              <div className={styles.frontTech} ref={frontTechRef}>
                <h3 className={styles.frontCaption}>frontend</h3>
                <ListTech data={text.servicePage.technology.frontend}/>
              </div>
              <div className={styles.backTech} ref={backTechRef}>
                <h3 className={styles.backCaption}>backend</h3>
                <ListTech data={text.servicePage.technology.backend}/>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
