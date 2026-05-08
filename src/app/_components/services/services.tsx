"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services.module.css";

gsap.registerPlugin(ScrollTrigger);

type ServiceItem = {
    number: string;
    title: string;
    description: string;
};

const SERVICES: ServiceItem[] = [
    {
        number: "01",
        title: "Frontend development / engineering",
        description:
            "I plan, design, build and maintain scalable frontend web applications using React, Vue.js, Next.js and TypeScript.",
    },
    {
        number: "02",
        title: "UI / UX implementation",
        description:
            "I translate design mockups into pixel-perfect, accessible and responsive interfaces with attention to every detail.",
    },
    {
        number: "03",
        title: "Performance optimization",
        description:
            "I analyze and optimize web applications for speed, accessibility and Core Web Vitals to deliver the best user experience.",
    },
];

const Services = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !headingRef.current) return;

        const tween = gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        return () => {
            tween.scrollTrigger?.kill();
        };
    }, []);

    const toggle = useCallback((index: number) => {
        setOpenIndex((prev) => (prev === index ? -1 : index));
    }, []);

    return (
        <section
            id="services"
            ref={sectionRef}
            className={styles.services}
            aria-label="Services"
        >
            <div className={styles.services_header}>
                <h4 className={styles.services_count}>02/</h4>
                <h2 ref={headingRef} className={styles.services_heading}>
                    Services
                </h2>
            </div>

            <div className={styles.accordion} role="list">
                {SERVICES.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={item.number}
                            className={styles.accordion_item}
                            role="listitem"
                        >
                            <div className={styles.accordion_divider} />
                            <button
                                className={styles.accordion_trigger}
                                onClick={() => toggle(index)}
                                aria-expanded={isOpen}
                                aria-controls={`service-panel-${index}`}
                            >
                                <span className={styles.accordion_number}>
                                    {item.number}
                                </span>
                                <span className={styles.accordion_title}>
                                    {item.title}
                                </span>
                                <span
                                    className={styles.accordion_icon}
                                    aria-hidden="true"
                                >
                                    {isOpen ? "−" : "+"}
                                </span>
                            </button>
                            <div
                                id={`service-panel-${index}`}
                                className={`${styles.accordion_panel} ${isOpen ? styles.open : ""}`}
                            >
                                <p className={styles.accordion_description}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
                <div className={styles.accordion_divider} />
            </div>
        </section>
    );
};

export default Services;
