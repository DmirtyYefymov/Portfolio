import styles from "./about.module.css";

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.about_title}>
                <h4 className={styles.about_count}>01/</h4>
            </div>
            <div className={styles.about_descr}>
                <p className={styles.about_text}>
                    Hi there 👋 I am just a guy who lives and work in Ukraine🇺🇦
                    as Frontend Developer.
                </p>
                <p className={styles.about_text}>
                    Frontend developer with high communication skills, team
                    player, and responsible for the tasks assigned. Value in
                    creating a useful product and achieving great results.
                </p>
            </div>
        </section>
    );
};

export default About;
