"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Container from "../container";
import styles from "./header.module.css";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
        >
            <Container>
                <div className={styles.header_wrap}>
                    <div className={styles.header_text}>Dmytro Yefymov</div>
                    <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        className={styles.header_navLink}
                    >
                        Home
                    </ScrollLink>
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        className={styles.header_navLink}
                    >
                        About
                    </ScrollLink>
                    <ScrollLink
                        to="blog"
                        smooth={true}
                        duration={500}
                        className={styles.header_navLink}
                    >
                        Blog
                    </ScrollLink>
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}
                        className={styles.header_navLink}
                    >
                        Contact
                    </ScrollLink>
                </div>
            </Container>
        </div>
    );
};

export default Header;
