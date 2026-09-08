import Link from "next/link";
import Container from "./Container";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              Seres <span>Tészta</span>
            </Link>

            <p>
              Minőségi tészták klasszikus ízekkel és egyszerű alapanyagokkal.
            </p>
          </div>

          <div className={styles.links}>
            <div>
              <strong>Oldalak</strong>
              <Link href="/">Főoldal</Link>
              <Link href="/about">Rólunk</Link>
              <Link href="/products">Termékek</Link>
              <Link href="/contact">Kapcsolat</Link>
            </div>

            <div>
              <strong>Hasznos</strong>
              <Link href="/#offers">Kiemelt ajánlatok</Link>
              <Link href="/products">Termékkínálat</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Seres Tészta</span>
          <span>Minden jog fenntartva.</span>
        </div>
      </Container>
    </footer>
  );
}
