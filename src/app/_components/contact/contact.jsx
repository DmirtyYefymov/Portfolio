import styles from "./contact.module.css";

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contact_title}>
                <h4 className={styles.contact_count}>03/</h4>
                <div className={styles.contact_text}>
                    <h4>Want to work <br /> together?</h4>
                    <h4>Send me a <br /> message</h4>
                </div>
            </div>
            <div className={styles.contact_email}>
                <a className={styles.big_text} href="mailto:hello.dmytroyefymov@gmail.com">hello.dmytro<br/>yefymov@gmail.com</a>
            </div>
        </section>
    );
};

export default Contact;
