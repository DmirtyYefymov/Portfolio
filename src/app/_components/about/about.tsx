"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./about.module.css";

const About = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            `.${styles.about_text}`,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: `#about`,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <section id="about" className={styles.about}>
            <div className={styles.about_title}>
                <h4 className={styles.about_count}>01/</h4>
            </div>
            <div className={styles.about_descr}>
                <p className={styles.about_text}>
                    Hi there 👋 I am just a guy who lives and work in Ukraine🇺🇦
                    as Frontend Developer.
                </p>
                <p className={styles.about_text}>
                    Frontend developer with high communication skills, team
                    player, and responsible for the tasks assigned. Value in
                    creating a useful product and achieving great results.
                </p>
            </div>
        </section>
    );
};

export default About;
