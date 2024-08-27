import styles from "./hero.module.css";
import Image from "next/image";
import heroImage from "../../../public/images/hero1.jpeg";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <h2 className={styles.hero_title}>
                <div className={styles.hero_big_text}>Front-end</div>
                <div className={styles.hero_big_text}>Developer</div>
            </h2>

            <div className={styles.hero_wrapper}>
                <div className={styles.image_container}>
                    <Image src={heroImage} alt="" />
                </div>

                <div className={styles.hero_name}>
                    <div className={styles.hero_big_text}>Dmytro</div>
                    <div className={styles.hero_big_text}>Yefymov</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
