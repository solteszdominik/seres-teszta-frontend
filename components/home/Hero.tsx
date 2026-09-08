import Link from "next/link";
import Container from "@/components/layout/Container";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>
              Hagyományos ízek, modern köntösben
            </span>

            <h1>
              Seres Tészta,
              <span> ahol az alapanyag számít.</span>
            </h1>

            <p className={styles.description}>
              Minőségi tészták gondosan válogatott alapanyagokból, otthoni
              fogásokhoz és hétköznapi kedvencekhez.
            </p>

            <div className={styles.actions}>
              <Link href="/products" className={styles.primaryButton}>
                Termékek megtekintése
              </Link>

              <Link href="/about" className={styles.secondaryButton}>
                Rólunk
              </Link>
            </div>

            <div className={styles.highlights}>
              <div>
                <strong>8+</strong>
                <span>induló termék</span>
              </div>

              <div>
                <strong>Minőségi</strong>
                <span>alapanyagok</span>
              </div>

              <div>
                <strong>Hazai</strong>
                <span>ízvilág</span>
              </div>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.imagePlaceholder}>
              <span>Seres Tészta</span>
              <small>Termékfotó / hero kép helye</small>
            </div>

            <div className={styles.floatingCard}>
              <span className={styles.cardLabel}>Kiemelt termék</span>
              <strong>Házi jellegű tészta</strong>
              <p>Egyszerű alapanyagok. Ismerős ízek.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
