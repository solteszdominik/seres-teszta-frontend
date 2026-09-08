"use client";

import Link from "next/link";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.menu} onClick={(event) => event.stopPropagation()}>
        <div className={styles.top}>
          <span className={styles.title}>Menü</span>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Menü bezárása"
          >
            ×
          </button>
        </div>

        <nav className={styles.nav}>
          <Link href="/" onClick={onClose}>
            Főoldal
          </Link>

          <Link href="/about" onClick={onClose}>
            Rólunk
          </Link>

          <Link href="/products" onClick={onClose}>
            Termékek
          </Link>

          <Link href="/#offers" onClick={onClose}>
            Kiemelt ajánlatok
          </Link>

          <Link href="/contact" onClick={onClose}>
            Kapcsolat
          </Link>
        </nav>

        <Link href="/products" className={styles.cta} onClick={onClose}>
          Termékek megtekintése
        </Link>
      </div>
    </div>
  );
}
