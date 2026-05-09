"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery, useMousePosition } from "@/hooks";
import { CONTACT_EMAIL } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import styles from "./contact.module.css";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const emailRef = useRef<HTMLAnchorElement>(null);
    const [isCopied, setIsCopied] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const { mousePos, isHovered, handleMouseMove, resetHover } =
        useMousePosition();

    useEffect(() => {
        if (!emailRef.current) return;

        const chars = emailRef.current.querySelectorAll(
            `.${styles.email_char}`
        );
        const animation = gsap.fromTo(
            chars,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        return () => {
            animation.scrollTrigger?.kill();
        };
    }, []);

    const copyToClipboard = useCallback((): void => {
        if (!isDesktop) return;
        navigator.clipboard
            .writeText(CONTACT_EMAIL)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 1000);
            })
            .catch(() => {});
    }, [isDesktop]);

    const emailParts = CONTACT_EMAIL.split("@");
    const beforeAt = emailParts[0];
    const afterAt = `@${emailParts[1]}`;

    return (
        <section
            id="contact"
            ref={sectionRef}
            className={styles.contact}
            aria-label="Contact"
        >
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
                onMouseLeave={isDesktop ? resetHover : undefined}
            >
                <div className={styles.email_text}>
                    <a
                        ref={emailRef}
                        className={styles.big_text}
                        href={`mailto:${CONTACT_EMAIL}`}
                        aria-label={`Send email to ${CONTACT_EMAIL}`}
                    >
                        {Array.from(beforeAt).map((char, index) => (
                            <span
                                key={`b-${index}`}
                                className={styles.email_char}
                            >
                                {char}
                            </span>
                        ))}
                        <br />
                        {Array.from(afterAt).map((char, index) => (
                            <span
                                key={`a-${index}`}
                                className={styles.email_char}
                            >
                                {char}
                            </span>
                        ))}
                    </a>
                </div>
                {isDesktop && (
                    <div
                        className={cn(
                            styles.copy_button,
                            isHovered && styles.show,
                            isCopied && styles.copied
                        )}
                        style={{ top: mousePos.y, left: mousePos.x }}
                        onClick={copyToClipboard}
                        role="button"
                        aria-label="Click to copy email"
                    >
                        {isCopied ? "Done!" : "Click to copy"}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;
