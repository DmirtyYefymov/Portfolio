"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import SplitText from "@/components/ui/split-text";
import styles from "./hero.module.css";
import heroImage from "../../../../public/images/hero1.jpeg";

const Hero = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tweens: gsap.core.Tween[] = [];

        const animateChars = (container: HTMLDivElement | null) => {
            if (!container) return;
            const chars = container.querySelectorAll(`.${styles.char}`);
            tweens.push(
                gsap.fromTo(
                    chars,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.05,
                        duration: 1,
                        ease: "power2.out",
                    }
                )
            );
        };

        animateChars(titleRef.current);
        animateChars(nameRef.current);

        if (imageRef.current) {
            tweens.push(
                gsap.fromTo(
                    imageRef.current,
                    { opacity: 0, scale: 0.8 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        ease: "power2.out",
                        delay: 0.5,
                    }
                )
            );
        }

        return () => tweens.forEach((t) => t.kill());
    }, []);

    return (
        <section className={styles.hero} id="home" aria-label="Hero">
            <h1 className={styles.hero_title}>
                <SplitText
                    ref={titleRef}
                    text={"Front-end\nDeveloper"}
                    className={styles.char}
                />
            </h1>

            <div className={styles.hero_wrapper}>
                <div className={styles.image_container} ref={imageRef}>
                    <Image
                        src={heroImage}
                        alt="Dmytro Yefymov — Frontend Developer"
                        priority
                        placeholder="blur"
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 300px, 600px"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>

                <div className={styles.hero_name}>
                    <SplitText
                        ref={nameRef}
                        text={"Dmytro\nYefymov"}
                        className={styles.char}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
