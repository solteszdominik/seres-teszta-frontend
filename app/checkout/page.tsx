"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Container from "@/components/layout/Container";
import { useCart } from "@/components/cart/CartProvider";
import { shopConfig } from "@/config/shop";
import styles from "./CheckoutPage.module.css";
import CheckoutForm from "@/components/checkout/CheckoutForm";

export default function CheckoutPage() {
  const router = useRouter();

  const { items, totalItems, totalPrice } = useCart();

  useEffect(() => {
    if (!shopConfig.enabled) {
      router.replace("/products");
    }
  }, [router]);

  useEffect(() => {
    if (!shopConfig.enabled) {
      return;
    }

    const orderSubmitted =
      sessionStorage.getItem("seres-order-submitted") === "true";

    if (items.length === 0 && !orderSubmitted) {
      router.replace("/cart");
    }
  }, [items, router]);

  if (!shopConfig.enabled) {
    return null;
  }

  /*
   * Sikeres rendelés közben rövid ideig már lehet üres
   * a kosár, ezért ilyenkor nem renderelünk új tartalmat.
   */
  if (items.length === 0) {
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

              <CheckoutForm />
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
