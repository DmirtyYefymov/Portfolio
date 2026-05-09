"use client";

import { useState, useCallback, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks";
import { NAV_ITEMS, SITE_NAME } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import Container from "../container";
import styles from "./header.module.css";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isScrolled } = useScrollPosition(50);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeMobileMenu();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [closeMobileMenu]);

    return (
        <>
            <header
                className={cn(styles.header, isScrolled && styles.scrolled)}
            >
                <Container>
                    <div className={styles.header_wrap}>
                        <Link href="/" className={styles.header_text}>
                            {SITE_NAME}
                        </Link>

                        <nav className={styles.header_nav}>
                            {NAV_ITEMS.map((item) =>
                                isHomePage ? (
                                    <ScrollLink
                                        key={item.to}
                                        to={item.to}
                                        smooth
                                        duration={500}
                                        offset={-50}
                                        className={styles.header_navLink}
                                    >
                                        {item.label}
                                    </ScrollLink>
                                ) : (
                                    <Link
                                        key={item.to}
                                        href={`/#${item.to}`}
                                        className={styles.header_navLink}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            )}
                        </nav>

                        <button
                            className={cn(
                                styles.burger,
                                isMobileMenuOpen && styles.active
                            )}
                            onClick={toggleMobileMenu}
                            aria-label={
                                isMobileMenuOpen ? "Close menu" : "Open menu"
                            }
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className={styles.burger_line} />
                            <span className={styles.burger_line} />
                            <span className={styles.burger_line} />
                        </button>
                    </div>
                </Container>
            </header>

            <div
                id="mobile-menu"
                className={cn(
                    styles.mobile_menu,
                    isMobileMenuOpen && styles.active
                )}
                aria-hidden={!isMobileMenuOpen}
                inert={!isMobileMenuOpen || undefined}
            >
                <nav
                    className={styles.mobile_nav}
                    aria-label="Mobile navigation"
                >
                    {NAV_ITEMS.map((item) =>
                        isHomePage ? (
                            <ScrollLink
                                key={item.to}
                                to={item.to}
                                smooth
                                duration={500}
                                offset={-90}
                                className={styles.mobile_nav_link}
                                onClick={closeMobileMenu}
                            >
                                {item.label}
                            </ScrollLink>
                        ) : (
                            <Link
                                key={item.to}
                                href={`/#${item.to}`}
                                className={styles.mobile_nav_link}
                                onClick={closeMobileMenu}
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </nav>
            </div>
        </>
    );
};

export default Header;
