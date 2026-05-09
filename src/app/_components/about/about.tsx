"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./about.module.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const textRefs = useRef<HTMLParagraphElement[]>([]);

    const addToRefs = useCallback((el: HTMLParagraphElement | null) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    }, []);

    useEffect(() => {
        if (!sectionRef.current || !headingRef.current) return;

        const trigger = {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
        };

        const headingAnim = gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: trigger,
            }
        );

        const textAnim = textRefs.current.length
            ? gsap.fromTo(
                  textRefs.current,
                  { opacity: 0, y: 50 },
                  {
                      opacity: 1,
                      y: 0,
                      duration: 1,
                      stagger: 0.3,
                      ease: "power2.out",
                      scrollTrigger: trigger,
                  }
              )
            : null;

        return () => {
            headingAnim.scrollTrigger?.kill();
            textAnim?.scrollTrigger?.kill();
        };
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className={styles.about}
            aria-label="About me"
        >
            <div className={styles.about_header}>
                <h4 className={styles.about_count}>01/</h4>
                <h2 ref={headingRef} className={styles.about_heading}>
                    About
                </h2>
            </div>
            <div className={styles.about_descr}>
                <p ref={addToRefs} className={styles.about_text}>
                    Hi there, I'm a frontend developer with a four year
                    experience, living and working in Ukraine.
                </p>
                <p ref={addToRefs} className={styles.about_text}>
                    I specialize in building responsive and user-friendly web
                    applications using modern technologies.
                </p>
                <p ref={addToRefs} className={styles.about_text}>
                    Frontend developer with high communication skills, team
                    player, and responsible for the tasks assigned. Value in
                    creating a useful product and achieving great results.
                </p>
            </div>
        </section>
    );
};

export default About;
