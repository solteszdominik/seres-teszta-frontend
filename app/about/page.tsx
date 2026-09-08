import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import styles from "./AboutPage.module.css";

export const metadata: Metadata = {
  title: "Rólunk",
  description: "Ismerd meg a Seres Tészta történetét, értékeit és szemléletét.",
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>Rólunk</span>

          <h1>Hagyományos ízek, egyszerű alapokra építve.</h1>

          <p>
            A Seres Tészta olyan termékeket szeretne adni, amelyekben a
            klasszikus ízvilág, a jó alapanyag és a megbízható minőség
            találkozik.
          </p>
        </Container>
      </section>

      <section className={styles.story}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.visual}>
              <div className={styles.imagePlaceholder}>
                <span>Seres Tészta</span>
                <small>Műhely / gyártás / családi fotó helye</small>
              </div>
            </div>

            <div className={styles.content}>
              <span className={styles.label}>A történetünk</span>

              <h2>Egyszerűen jó tésztát szeretnénk készíteni.</h2>

              <p>
                A Seres Tészta alapja a klasszikus tésztakészítés szeretete és
                az a szemlélet, hogy nem kell túlbonyolítani azt, ami jól
                működik.
              </p>

              <p>
                A célunk olyan termékek készítése, amelyek megbízhatóak,
                ismerősek, és könnyen beilleszthetők a hétköznapi főzésbe.
              </p>

              <p>
                A pontos történetet, évszámokat, családi hátteret és gyártási
                részleteket később a valódi Seres-adatok alapján pontosítjuk.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.values}>
        <Container>
          <div className={styles.valuesHeader}>
            <span className={styles.label}>Ami fontos nekünk</span>
            <h2>Az alapoktól a kész termékig.</h2>
          </div>

          <div className={styles.valuesGrid}>
            <article>
              <span>01</span>
              <h3>Minőségi alapanyagok</h3>
              <p>
                Olyan összetevőkre építünk, amelyek egy jó tészta valódi alapját
                adják.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Hagyományos szemlélet</h3>
              <p>
                Ismerős formák, klasszikus ízek és olyan termékek, amelyeknek
                helyük van a magyar konyhában.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Megbízható minőség</h3>
              <p>
                Arra törekszünk, hogy minden csomag ugyanazt az élményt adja.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
