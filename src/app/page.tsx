import { getPostMetadata } from "../lib/api";
import styles from "./page.module.css";
import Container from "./_components/container";
import PostPreview from "./_components/PostPreview";
import Hero from "./_components/hero";
import About from "./_components/about";

export default function Home() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));

    return (
        <main className={styles.main}>
            <Container>
                <Hero />
                <About />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {postPreviews}
                </div>
            </Container>
        </main>
    );
}
