import styles from "./ContactStyle.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.cectionTitle}>Contact Me</h1>
      <form action="https://formspree.io/f/mldggjkq" method="post">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="massage" hidden>
            Massage
          </label>
          <textarea
            type="text"
            name="massage"
            id="massage"
            placeholder="Massage"
            required
          ></textarea>
        </div>
        <input type="submit" className="hover btn" value="Submit" />
      </form>
    </section>
  );
};

export default Contact;
