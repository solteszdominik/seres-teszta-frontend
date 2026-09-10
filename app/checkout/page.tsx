"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Container from "@/components/layout/Container";
import { useCart } from "@/components/cart/CartProvider";
import { shopConfig } from "@/config/shop";
import styles from "./CheckoutPage.module.css";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalItems, totalPrice } = useCart();

  useEffect(() => {
    if (!shopConfig.enabled) {
      router.replace("/products");
    }
  }, [router]);

  useEffect(() => {
    if (shopConfig.enabled && items.length === 0) {
      router.replace("/cart");
    }
  }, [items, router]);

  if (!shopConfig.enabled || items.length === 0) {
    return null;
  }

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>Rendelés</span>
          <h1>Rendelési adatok.</h1>
          <p>
            Add meg az adataidat, ellenőrizd a kosarad tartalmát, majd küldd el
            a rendelést.
          </p>
        </Container>
      </section>

      <section className={styles.checkoutSection}>
        <Container>
          <div className={styles.layout}>
            <div className={styles.formColumn}>
              <div className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>01</span>

                <div>
                  <span className={styles.label}>Vásárló adatai</span>
                  <h2>Elérhetőségek</h2>
                </div>
              </div>

              <form className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="customerName">Név</label>
                  <input
                    id="customerName"
                    name="customerName"
                    type="text"
                    placeholder="Teljes név"
                    required
                  />
                </div>

                <div className={styles.fieldGrid}>
                  <div className={styles.field}>
                    <label htmlFor="customerEmail">E-mail cím</label>
                    <input
                      id="customerEmail"
                      name="customerEmail"
                      type="email"
                      placeholder="pelda@email.hu"
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="customerPhone">Telefonszám</label>
                    <input
                      id="customerPhone"
                      name="customerPhone"
                      type="tel"
                      placeholder="+36 ..."
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="companyName">
                    Cégnév <span>(opcionális)</span>
                  </label>

                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Cégnév"
                  />
                </div>

                <div className={styles.sectionHeading}>
                  <span className={styles.sectionNumber}>02</span>

                  <div>
                    <span className={styles.label}>Szállítás</span>
                    <h2>Szállítási cím</h2>
                  </div>
                </div>

                <div className={styles.fieldGrid}>
                  <div className={styles.field}>
                    <label htmlFor="postalCode">Irányítószám</label>
                    <input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      placeholder="4130"
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="city">Település</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Derecske"
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="streetAddress">Utca, házszám</label>
                  <input
                    id="streetAddress"
                    name="streetAddress"
                    type="text"
                    placeholder="Kossuth Lajos u. 26."
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">
                    Megjegyzés <span>(opcionális)</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Megjegyzés a rendeléshez..."
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Rendelés elküldése
                </button>
              </form>
            </div>

            <aside className={styles.summary}>
              <div className={styles.summaryTop}>
                <div>
                  <span className={styles.label}>Kosár</span>
                  <h2>Rendelés összesítő</h2>
                </div>

                <Link href="/cart" className={styles.editCart}>
                  Kosár szerkesztése
                </Link>
              </div>

              <div className={styles.items}>
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className={styles.item}>
                    <div>
                      <strong>{product.name}</strong>
                      <span>
                        {quantity} × {product.price.toLocaleString("hu-HU")} Ft
                      </span>
                    </div>

                    <strong>
                      {(product.price * quantity).toLocaleString("hu-HU")} Ft
                    </strong>
                  </div>
                ))}
              </div>

              <div className={styles.summaryRow}>
                <span>Termékek</span>
                <strong>{totalItems} db</strong>
              </div>

              <div className={styles.totalRow}>
                <span>Összesen</span>
                <strong>{totalPrice.toLocaleString("hu-HU")} Ft</strong>
              </div>

              <p className={styles.shippingNote}>
                A szállítási díjat és a végleges szállítási feltételeket a
                futárszolgálati szerződés után kötjük be.
              </p>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
