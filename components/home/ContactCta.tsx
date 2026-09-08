import Link from "next/link";
import Container from "@/components/layout/Container";
import styles from "./ContactCta.module.css";

export default function ContactCta() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div>
            <span className={styles.eyebrow}>Kapcsolat</span>
            <h2>Kérdésed van a termékekről vagy a rendelésről?</h2>
            <p>
              Keress minket bizalommal, segítünk eligazodni a termékek és a
              rendelési lehetőségek között.
            </p>
          </div>

          <Link href="/contact" className={styles.button}>
            Kapcsolatfelvétel
          </Link>
        </div>
      </Container>
    </section>
  );
}
