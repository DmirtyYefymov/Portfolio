"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./hero.module.css";
import Image from "next/image";
import heroImage from "../../../../public/images/hero1.jpeg";

const Hero = () => {
    useEffect(() => {
        const animateText = (selector: string) => {
            gsap.fromTo(
                `${selector} .${styles.char}`,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.05,
                    duration: 1,
                    ease: "power2.out",
                }
            );
        };

        animateText(`.${styles.hero_title}`);
        animateText(`.${styles.hero_name}`);

        gsap.fromTo(
            `.${styles.image_container}`,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power2.out",
                delay: 0.5,
            }
        );
    }, []);

    return (
        <section className={styles.hero} id="home">
            <h2 className={styles.hero_title}>
                <div className={styles.line}>
                    <span className={styles.char}>F</span>
                    <span className={styles.char}>r</span>
                    <span className={styles.char}>o</span>
                    <span className={styles.char}>n</span>
                    <span className={styles.char}>t</span>
                    <span className={styles.char}>-</span>
                    <span className={styles.char}>e</span>
                    <span className={styles.char}>n</span>
                    <span className={styles.char}>d</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.char}>D</span>
                    <span className={styles.char}>e</span>
                    <span className={styles.char}>v</span>
                    <span className={styles.char}>e</span>
                    <span className={styles.char}>l</span>
                    <span className={styles.char}>o</span>
                    <span className={styles.char}>p</span>
                    <span className={styles.char}>e</span>
                    <span className={styles.char}>r</span>
                </div>
            </h2>

            <div className={styles.hero_wrapper}>
                <div className={styles.image_container}>
                    <Image src={heroImage} alt="Hero Image" />
                </div>

                <div className={styles.hero_name}>
                    <div className={styles.line}>
                        <span className={styles.char}>D</span>
                        <span className={styles.char}>m</span>
                        <span className={styles.char}>y</span>
                        <span className={styles.char}>t</span>
                        <span className={styles.char}>r</span>
                        <span className={styles.char}>o</span>
                    </div>
                    <div className={styles.line}>
                        <span className={styles.char}>Y</span>
                        <span className={styles.char}>e</span>
                        <span className={styles.char}>f</span>
                        <span className={styles.char}>y</span>
                        <span className={styles.char}>m</span>
                        <span className={styles.char}>o</span>
                        <span className={styles.char}>v</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
