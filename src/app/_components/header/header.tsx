"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";
import Container from "../container";
import styles from "./header.module.css";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const isHomePage = pathname === "/";

    return (
        <>
            <div
                className={`${styles.header} ${
                    isScrolled ? styles.scrolled : ""
                }`}
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
                                {/* <ScrollLink
                                    to="blog"
                                    smooth={true}
                                    duration={500}
                                    className={styles.header_navLink}
                                >
                                    Blog
                                </ScrollLink> */}
                                <ScrollLink
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    className={styles.header_navLink}
                                >
                                    Contact
                                </ScrollLink>

                                {!isMobileMenuOpen && (
                                    <div
                                        className={`${styles.burger}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        <div
                                            className={styles.burger_line}
                                        ></div>
                                        <div
                                            className={styles.burger_line}
                                        ></div>
                                        <div
                                            className={styles.burger_line}
                                        ></div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                <a
                                    href="/#home"
                                    className={styles.header_navLink}
                                >
                                    Home
                                </a>
                                <a
                                    href="/#about"
                                    className={styles.header_navLink}
                                >
                                    About
                                </a>
                                {/* <a
                                    href="/#blog"
                                    className={styles.header_navLink}
                                >
                                    Blog
                                </a> */}
                                <a
                                    href="/#contact"
                                    className={styles.header_navLink}
                                >
                                    Contact
                                </a>

                                {!isMobileMenuOpen && (
                                    <div
                                        className={`${styles.burger}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        <div
                                            className={styles.burger_line}
                                        ></div>
                                        <div
                                            className={styles.burger_line}
                                        ></div>
                                        <div
                                            className={styles.burger_line}
                                        ></div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </Container>
            </div>

            <div
                className={`${styles.mobile_menu} ${
                    isMobileMenuOpen ? styles.active : ""
                }`}
            >
                {isMobileMenuOpen && (
                    <div
                        className={`${styles.burger} ${styles.active} ${styles.burger_fixed}`}
                        onClick={toggleMobileMenu}
                    >
                        <div className={styles.burger_line}></div>
                        <div className={styles.burger_line}></div>
                        <div className={styles.burger_line}></div>
                    </div>
                )}

                <div className={styles.mobile_nav}>
                    {isHomePage ? (
                        <>
                            <ScrollLink
                                to="home"
                                smooth={true}
                                duration={500}
                                className={styles.mobile_nav_link}
                                onClick={closeMobileMenu}
                            >
                                Home
                            </ScrollLink>
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                className={styles.mobile_nav_link}
                                onClick={closeMobileMenu}
                            >
                                About
                            </ScrollLink>
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                className={styles.mobile_nav_link}
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </ScrollLink>
                        </>
                    ) : (
                        <>
                            <a
                                href="/#home"
                                className={styles.mobile_nav_link}
                                onClick={closeMobileMenu}
                            >
                                Home
                            </a>
                            <a
                                href="/#about"
                                className={styles.mobile_nav_link}
                                onClick={closeMobileMenu}
                            >
                                About
                            </a>
                            {/* <a
                                href="/#blog"
                                className={styles.mobile_nav_link}
                                onClick={closeMobileMenu}
                            >
                                Blog
                            </a> */}
                            <a
                                href="/#contact"
                                className={styles.mobile_nav_link}
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </a>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;
