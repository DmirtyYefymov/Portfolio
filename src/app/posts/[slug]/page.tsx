import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { getPostMetadata } from "@/lib/api";
import Container from "@/app/_components/container";
import styles from "../../_components/blog/blog.module.css";

const getPostContent = (slug: string) => {
    const folder = "_posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <Container>
            <div className={styles.post_wrapper}>
                <div className="my-12 text-center">
                    <h1 className={styles.post_title}>{post.data.title}</h1>
                    <p className={styles.post_date}>{post.data.date}</p>
                </div>

                <article className={styles.post_content}>
                    <Markdown>{post.content}</Markdown>
                </article>
            </div>
        </Container>
    );
};

export default PostPage;
