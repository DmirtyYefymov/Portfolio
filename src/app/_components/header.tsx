import Link from "next/link";
import Container from "./container";
import styles from "./header.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.header_wrap}>
                    <div className={styles.header_text}>Dmytro Yefymov</div>
                    <Link className={styles.header_navLink} href="/">
                        Home
                    </Link>
                    <Link className={styles.header_navLink} href="#about">
                        About
                    </Link>
                    <Link className={styles.header_navLink} href="#blog">
                        Blog
                    </Link>
                    <Link className={styles.header_navLink} href="#work">
                        Work
                    </Link>
                    <Link className={styles.header_navLink} href="#contact">
                        Contact
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Header;
