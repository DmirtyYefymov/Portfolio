import { PostMetadata } from "@/interfaces/postMetadata";
import Link from "next/link";
import styles from "./blog.module.css";

const PostPreview = (props: PostMetadata) => {
    return (
        <div className={styles.post_preview}>
            <p className="text-sm text-slate-400">{props.date}</p>

            <Link href={`/posts/${props.slug}`}>
                <h2 className=" text-violet-600 hover:underline mb-4">
                    {props.title}
                </h2>
            </Link>
            <p className="text-slate-700">{props.subtitle}</p>
        </div>
    );
};

export default PostPreview;
