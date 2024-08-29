import styles from "./page.module.css";
import Container from "./_components/container";
import Hero from "./_components/hero";
import About from "./_components/about";
import Blog from "./_components/blog";

export default function Home() {
    return (
        <main className={styles.main}>
            <Container>
                <Hero />
                <About />
                <Blog />
            </Container>
        </main>
    );
}
