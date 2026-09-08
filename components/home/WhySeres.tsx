import Container from "@/components/layout/Container";
import styles from "./WhySeres.module.css";

const benefits = [
  {
    title: "Gondosan válogatott alapanyagok",
    description:
      "Az egyszerűség nálunk előny: olyan összetevőkkel dolgozunk, amelyeknek helyük van egy jó tésztában.",
  },
  {
    title: "Hagyományos ízvilág",
    description:
      "Ismerős, otthonos ízek klasszikus magyar fogásokhoz és hétköznapi ételekhez.",
  },
  {
    title: "Megbízható minőség",
    description:
      "Arra törekszünk, hogy minden csomag ugyanazt a minőséget hozza, amire számítasz.",
  },
  {
    title: "Egyszerű választás",
    description:
      "Átlátható kínálat, jól érthető termékinformációk és könnyű rendelési folyamat.",
  },
];

export default function WhySeres() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Miért Seres?</span>

          <h2>Jó tészta egyszerű alapokra építve.</h2>

          <p>
            Nem akarjuk túlbonyolítani azt, aminek működnie kell: jó
            alapanyagok, megbízható minőség és olyan termékek, amelyekhez
            szívesen nyúlsz a konyhában.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <article className={styles.card} key={benefit.title}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
