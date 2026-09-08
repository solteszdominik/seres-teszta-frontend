import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import styles from "./ContactPage.module.css";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Kapcsolat",
  description:
    "Vedd fel a kapcsolatot a Seres Tésztával termékekkel, rendelésekkel vagy egyéb kérdésekkel kapcsolatban.",
};

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>Kapcsolat</span>

          <h1>Segítünk, ha kérdésed van.</h1>

          <p>
            Termékekkel, rendelésekkel vagy együttműködéssel kapcsolatban is
            kereshetsz minket.
          </p>
        </Container>
      </section>

      <section className={styles.contact}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.info}>
              <span className={styles.label}>Elérhetőségeink</span>

              <h2>Keress minket bizalommal.</h2>

              <p className={styles.intro}>
                Termékeinkkel, rendelésekkel vagy egyéb kérdésekkel kapcsolatban
                keress minket az alábbi elérhetőségeken.
              </p>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <span>E-mail</span>
                  <a href="mailto:esgeteszta@gmail.com">
                    <strong>esgeteszta@gmail.com</strong>
                  </a>
                </div>

                <div className={styles.contactItem}>
                  <span>Telefon</span>
                  <a href="tel:+3654410775">
                    <strong>(06 54) 410 775</strong>
                  </a>
                </div>

                <div className={styles.contactItem}>
                  <span>Mobil</span>
                  <a href="tel:+36304155046">
                    <strong>+36 30 415 5046</strong>
                  </a>
                </div>

                <div className={styles.contactItem}>
                  <span>Cím</span>
                  <strong>4130 Derecske, Kossuth Lajos u. 26.</strong>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>

      <section className={styles.mapSection}>
        <Container>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1351.4410841946678!2d21.564840638829022!3d47.3556984098421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474703db6ad3f4bf%3A0xf74ef577c23eea75!2sDerecske%2C%20Kossuth%20u.%2026A%2C%204130%20Magyarorsz%C3%A1g!5e0!3m2!1shu!2sus!4v1788882632199!5m2!1shu!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Seres Tészta térkép"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
