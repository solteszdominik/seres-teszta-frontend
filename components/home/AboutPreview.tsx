import Link from "next/link";
import Container from "@/components/layout/Container";
import styles from "./AboutPreview.module.css";

export default function AboutPreview() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.visual}>
            <div className={styles.imagePlaceholder}>
              <span>Seres Tészta</span>
              <small>Gyártás / alapanyag / családi fotó helye</small>
            </div>
          </div>

          <div className={styles.content}>
            <span className={styles.eyebrow}>Rólunk</span>

            <h2>Hagyomány, egyszerű alapanyagok és ismerős ízek.</h2>

            <p>
              A Seres Tészta célja, hogy olyan tészták kerüljenek az asztalra,
              amelyek a klasszikus, otthoni ízeket idézik, mégis jól
              illeszkednek a mai mindennapokhoz.
            </p>

            <p>
              Nálunk az alapanyagok minősége, a megbízható gyártás és az
              egyszerűség kerül előtérbe.
            </p>

            <div className={styles.values}>
              <div className={styles.valueItem}>
                <strong>Minőségi alapanyagok</strong>
                <span>Egyszerű, átlátható összetétel.</span>
              </div>

              <div className={styles.valueItem}>
                <strong>Hagyományos ízvilág</strong>
                <span>Olyan tészta, amit jó érzés hazavinni.</span>
              </div>

              <div className={styles.valueItem}>
                <strong>Megbízható minőség</strong>
                <span>Állandó minőség, minden csomagban.</span>
              </div>
            </div>

            <Link href="/about" className={styles.link}>
              Ismerj meg minket
              <span>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
