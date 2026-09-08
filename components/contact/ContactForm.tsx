"use client";

import { FormEvent } from "react";
import styles from "@/app/contact/ContactPage.module.css";

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Kapcsolati űrlap elküldve.");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formHeading}>
        <span className={styles.label}>Írj nekünk</span>
        <h2>Üzenetküldés</h2>
      </div>

      <div className={styles.field}>
        <label htmlFor="name">Név</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Teljes név"
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">E-mail cím</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="pelda@email.hu"
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Telefonszám</label>
        <input id="phone" name="phone" type="tel" placeholder="+36 ..." />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Üzenet</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Miben segíthetünk?"
          required
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Üzenet küldése
      </button>
    </form>
  );
}
