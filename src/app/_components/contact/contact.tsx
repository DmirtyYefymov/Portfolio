"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./contact.module.css";
import { MousePosition } from "@/interfaces/mousePosition";

const Contact: React.FC = () => {
    const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [isDesktop, setIsDesktop] = useState<boolean>(true);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            `.${styles.email_char}`,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: `#contact`,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        const checkScreenWidth = () => {
            if (window.innerWidth >= 768) {
                setIsDesktop(true);
            } else {
                setIsDesktop(false);
            }
        };
        checkScreenWidth();

        window.addEventListener("resize", checkScreenWidth);

        return () => {
            window.removeEventListener("resize", checkScreenWidth);
        };
    }, []);

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ): void => {
        if (!isDesktop) return;

        setMousePos({ x: e.clientX, y: e.clientY });

        const element = e.currentTarget.getBoundingClientRect();
        const isOutside =
            e.clientX < element.left ||
            e.clientX > element.right ||
            e.clientY < element.top ||
            e.clientY > element.bottom;

        if (isOutside) {
            setIsHovered(false);
        } else {
            setIsHovered(true);
        }
    };

    const copyToClipboard = (): void => {
        if (!isDesktop) return;
        const email = "hello.dmytro.yefymov@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1000);
        });
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contact_title}>
                <h4 className={styles.contact_count}>03/</h4>
                <div className={styles.contact_text}>
                    <h4>
                        Want to work <br /> together?
                    </h4>
                    <h4>
                        Send me a <br /> message
                    </h4>
                </div>
            </div>
            <div
                className={styles.contact_email}
                onMouseMove={isDesktop ? handleMouseMove : undefined}
            >
                <div className={styles.email_text}>
                    <a
                        className={styles.big_text}
                        href="mailto:hello.dmytro.yefymov@gmail.com"
                    >
                        {Array.from("hello.dmytro").map((char, index) => (
                            <span key={index} className={styles.email_char}>
                                {char}
                            </span>
                        ))}
                        <br />
                        {Array.from("yefymov@gmail.com").map((char, index) => (
                            <span key={index} className={styles.email_char}>
                                {char}
                            </span>
                        ))}
                    </a>
                </div>
                {isDesktop && (
                    <div
                        className={`${styles.copy_button} ${
                            isHovered ? styles.show : ""
                        } ${isCopied ? styles.copied : ""}`}
                        style={{ top: mousePos.y, left: mousePos.x }}
                        onClick={copyToClipboard}
                    >
                        {isCopied ? "Done!" : "Click to copy"}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;
