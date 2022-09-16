import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import anime from "animejs";
import styles from "../../styles/About.module.sass";
import srcImgCoder from "../../assets/img/Coder.svg";
import srcImgBuild from "../../assets/img/Build.svg";
import srcImgSupport from "../../assets/img/Support.svg";

export default function About() {
  const text = useSelector((state) => state.language.text);
  const bannerCaptionRef = useRef();
  const infDevRef = useRef();
  const infDevDescRef = useRef(); 

  useEffect(() => {

    // animation captions
    const observerCaption = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const parentEl = entry.target.parentElement;
        const lettersClassName =
          entry.target.childNodes[0].childNodes[0].className;
        
        // animation spots
        parentEl.childNodes.forEach((value, index) => {
            if(value.className == styles.spotsBanner) {
              anime({
                targets: `.${value.className}`,
                translateX: [-500, 0],
                opacity: [0, 1],
                duration: 2500
              });
            }
        });

        if (entry.isIntersecting) {
          anime({
            targets: `.${entry.target.className} .${lettersClassName}`,
            translateY: ["1.1em", 0],
            translateX: ["0.55em", 0],
            opacity: [0, 1],
            translateZ: 0,
            rotateZ: [180, 0],
            duration: 1000,
            easing: "easeOutExpo",
            delay: (el, i) => 50 * i,
          });
        }
      });
    });

    // animation descriptions
    const observeDesc = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.target.className);
        const lettersClassName =
          entry.target.childNodes[0].childNodes[0].className;
        if (entry.isIntersecting) {
          anime({
            targets: `.${entry.target.className} .${lettersClassName}`,
            translateY: ["1.1em", 0],
            opacity: [0, 1],
            translateZ: 0,
            duration: 150,
            delay: (el, i) => 25 * i,
          });
        }
      });
    });

    observerCaption.observe(bannerCaptionRef.current);
    observerCaption.observe(infDevRef.current);
    observeDesc.observe(infDevDescRef.current);
  }, []);

  function Letters(props) {
    const className = props.letterClass;
    const letter = props.text;
    const array = Array.from(letter);
    return array.map((value, index) => {
      return (
        <span
          className={className}
          style={value == " " ? { marginLeft: 5 } : { marginLeft: 0 }}
          key={index}
        >
          {value}
        </span>
      );
    });
  }

  return (
    <>
      <Head>
        <title>{text.head.title.about}</title>
      </Head>
      <div className={styles.about}>
        <div className={styles.banner}>
          <h1 className={styles.captionBanner} ref={bannerCaptionRef}>
            <span className={styles.text_wrapper}>
              <Letters letterClass={styles.letters} text={text.aboutPage.banner} />
            </span>
          </h1>
          <div className={styles.spotsBanner}></div>
        </div>
        <div className={styles.infDev}>
          <h1 className={styles.captionInfDev} ref={infDevRef}>
            <span className={styles.text_wrapper}>
              <Letters letterClass={styles.letters} text={text.aboutPage.infDev.caption} />
            </span>
          </h1>
          <p className={styles.descInfDev} ref={infDevDescRef}>
            <span className={styles.text_wrapper}>
              <Letters letterClass={styles.lettersDesc} text={text.aboutPage.infDev.description} />
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
