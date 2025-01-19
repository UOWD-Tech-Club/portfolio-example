import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className={styles.contents}>
      <div>
        <h1>Let's Connect</h1>
        <p>
          Feel free to get in touch with me. I am always open to discussing new
          projects.
        </p>
        <form className={styles.form}>
          <input
            className={styles.firstName}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          <input
            className={styles.lastName}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
          <input
            className={styles.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className={styles.phone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
          />
          <textarea
            className={styles.message}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          />
          <input
            className={styles.submitButton}
            type="submit"
            value="Submit"
            onClick={(e) => e.preventDefault()}
          />
        </form>
      </div>
      <div className={styles.art}></div>
    </section>
  );
}
