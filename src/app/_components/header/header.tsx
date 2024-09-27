"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";
import Container from "../container";
import styles from "./header.module.css";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isHomePage = pathname === "/";

    return (
        <div
            className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
        >
            <Container>
                <div className={styles.header_wrap}>
                    <a href="/" className={styles.header_text}>
                        Dmytro Yefymov
                    </a>
                    {isHomePage ? (
                        <>
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
                        </>
                    ) : (
                        <>
                            <a href="/#home" className={styles.header_navLink}>
                                Home
                            </a>
                            <a href="/#about" className={styles.header_navLink}>
                                About
                            </a>
                            <a href="/#blog" className={styles.header_navLink}>
                                Blog
                            </a>
                            <a
                                href="/#contact"
                                className={styles.header_navLink}
                            >
                                Contact
                            </a>
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Header;
