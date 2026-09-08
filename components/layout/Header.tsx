"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import { useCart } from "@/components/cart/CartProvider";
import styles from "./Header.module.css";
import { shopConfig } from "@/config/shop";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.inner}>
            <Link href="/" className={styles.logo}>
              Seres <span className={styles.logoAccent}>Tészta</span>
            </Link>

            <nav className={styles.nav}>
              <Link href="/about" className={styles.navLink}>
                Rólunk
              </Link>

              <Link href="/products" className={styles.navLink}>
                Termékek
              </Link>

              <Link href="/#offers" className={styles.navLink}>
                Kiemelt ajánlatok
              </Link>

              <Link href="/contact" className={styles.navLink}>
                Kapcsolat
              </Link>
            </nav>

            <div className={styles.actions}>
              {shopConfig.enabled && (
                <Link
                  href="/cart"
                  className={styles.cartButton}
                  aria-label={`Kosár, ${totalItems} termék`}
                >
                  <span className={styles.cartIcon}>🛒</span>
                  <span className={styles.cartText}>Kosár</span>

                  {totalItems > 0 && (
                    <span className={styles.cartBadge}>{totalItems}</span>
                  )}
                </Link>
              )}

              <button
                className={styles.mobileMenuButton}
                type="button"
                aria-label="Menü megnyitása"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(true)}
              >
                ☰
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
