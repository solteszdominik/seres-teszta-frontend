import Link from "next/link";
import Container from "@/components/layout/Container";
import styles from "./FeaturedOffer.module.css";

export default function FeaturedOffer() {
  return (
    <section className={styles.section} id="offers">
      <Container>
        <div className={styles.card}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Kiemelt ajánlat</span>

            <h2>Válogasd össze a kedvenceidet egy csomagban.</h2>

            <p>
              Indulásként jól működhet egy többféle tésztából összeállított
              csomagajánlat. Később ezt könnyen cserélhetjük valódi akcióra,
              szezonális ajánlatra vagy egy konkrét termék kiemelésére.
            </p>

            <div className={styles.meta}>
              <span>Válogatott termékek</span>
              <span>Egyszerű rendelés</span>
              <span>Kedvező csomagár</span>
            </div>

            <Link href="/products" className={styles.button}>
              Ajánlat megtekintése
            </Link>
          </div>

          <div className={styles.visual}>
            <div className={styles.visualInner}>
              <span className={styles.badge}>Seres válogatás</span>

              <strong>4 féle tészta</strong>

              <p>Egy csomagban a klasszikus kedvencek.</p>

              <div className={styles.price}>
                <span>csomagár</span>
                <strong>3 490 Ft</strong>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
