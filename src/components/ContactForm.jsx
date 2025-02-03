import { useState } from "react";
import styles from "./ContactForm.module.css";
import validator from "validator";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  function validateEmail(e) {
    setEmail(e.target.value);

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid Email!");
    }
  }

  function validatePhone(e) {
    setPhone(e.target.value);

    if (validator.isMobilePhone(phone)) {
      setPhoneError("");
    } else {
      setPhoneError("Please enter a Phone Number!");
    }
  }

  function submitForm(e) {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setEmailError("");
    setPhoneError("");
  }

  return (
    <section className={styles.contents}>
      <div>
        <h1>Let's Connect!</h1>
        <p>
          Feel free to get in touch with me. I am always open to discussing new
          projects.
        </p>
        <p className={styles.error}>{emailError}</p>
        <p className={styles.error}>{phoneError}</p>
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
            onChange={validateEmail}
            placeholder="Email"
          />
          <input
            className={styles.phone}
            value={phone}
            onChange={validatePhone}
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
            onClick={submitForm}
          />
        </form>
      </div>
      <div className={styles.art}></div>
    </section>
  );
}

export default ContactForm;
