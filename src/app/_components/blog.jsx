import { getPostMetadata } from "../../lib/api";
import PostPreview from "./postPreview";
import styles from "./blog.module.css";

const Blog = () => {
    const postMetadata = getPostMetadata();
    return (
        <section className={styles.blog} id="blog">
            <div className={styles.blog_header}>
                <h4>02/</h4>
                <div className={styles.blog_head_text}>
                    <h4>My Blog</h4>
                    <h4>More about me</h4>
                </div>
                
            </div>

            <div className={styles.blog_wrapper}>
                <div className={styles.posts_block}></div>
                <div className={styles.posts_wrapper}>
                    {postMetadata.map((post) => (
                        <PostPreview key={post.slug} {...post} />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Blog;
