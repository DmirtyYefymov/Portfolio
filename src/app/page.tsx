import Container from "./_components/container";
import Hero from "./_components/hero/hero";
import About from "./_components/about/about";
import Services from "./_components/services/services";
import Contact from "./_components/contact/contact";

export default function Home() {
    return (
        <main>
            <Container>
                <Hero />
                <About />
                <Services />
                <Contact />
            </Container>
        </main>
    );
}
