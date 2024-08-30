import Link from "next/link";
import Container from "./container";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.footer_wrap}>
                    <div className={styles.footer_text}>Dmytro Yefymov</div>
                    <Link className={styles.footer_navLink} target="_blank" href="https://github.com/DmirtyYefymov">
                        GitHub
                    </Link>
                    <Link className={styles.footer_navLink} target="_blank" href="https://www.linkedin.com/in/dmytro-yefymov-frontend-developer/">
                        Linkedin
                    </Link>
                    <Link className={styles.footer_navLink} target="_blank" href="https://www.instagram.com/dmitryefimov__">
                        Instagram
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
