import Link from "next/link";
import { SOCIAL_LINKS, SITE_NAME } from "@/constants/navigation";
import Container from "../container";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer_wrap}>
                    <div className={styles.footer_text}>
                        {SITE_NAME} <br /> Front-end Developer
                    </div>
                    <nav
                        className={styles.footer_navLink_wrapp}
                        aria-label="Social links"
                    >
                        {SOCIAL_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                className={styles.footer_navLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={link.href}
                                aria-label={`Visit ${link.label} profile (opens in new tab)`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
