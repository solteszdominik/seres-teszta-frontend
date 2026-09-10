"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { CartItem } from "@/types/cart";
import styles from "./OrderSuccessPage.module.css";

interface LastOrder {
  orderId: string;
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<LastOrder | null>(null);

  useEffect(() => {
    const savedOrder = sessionStorage.getItem("seres-last-order");

    if (!savedOrder) {
      return;
    }

    try {
      const parsedOrder = JSON.parse(savedOrder) as LastOrder;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOrder(parsedOrder);
    } catch {
      setOrder(null);
    }
  }, []);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <span className={styles.icon}>✓</span>

          <span className={styles.eyebrow}>Rendelés sikeres</span>

          <h1>Köszönjük a rendelésed!</h1>

          {order ? (
            <>
              <div className={styles.orderIdBox}>
                <span>Rendelési azonosító</span>

                <strong>{order.orderId}</strong>
              </div>

              <div className={styles.orderSummary}>
                <div className={styles.summaryHeader}>
                  <h2>Rendelésed</h2>

                  <span>{order.totalItems} db termék</span>
                </div>

                <div className={styles.orderItems}>
                  {order.items.map(({ product, quantity }) => (
                    <div key={product.id} className={styles.orderItem}>
                      <div className={styles.productInfo}>
                        <strong>{product.name}</strong>

                        <span>{product.packageSize}</span>

                        <span>
                          {quantity} × {product.price.toLocaleString("hu-HU")}{" "}
                          Ft
                        </span>
                      </div>

                      <strong className={styles.itemPrice}>
                        {(product.price * quantity).toLocaleString("hu-HU")} Ft
                      </strong>
                    </div>
                  ))}
                </div>

                <div className={styles.total}>
                  <span>Összesen</span>

                  <strong>{order.totalPrice.toLocaleString("hu-HU")} Ft</strong>
                </div>
              </div>

              <p className={styles.info}>
                A rendelési azonosítót érdemes megőrizned, mert erre szükség
                lehet, ha később kapcsolatba lépsz velünk a rendeléseddel
                kapcsolatban.
              </p>
            </>
          ) : (
            <p className={styles.info}>
              A rendelési adatok nem találhatók. Amennyiben rendelést adtál le,
              kérjük, ellenőrizd a visszaigazoló e-mailt.
            </p>
          )}

          <div className={styles.actions}>
            <Link href="/products" className={styles.primaryButton}>
              Tovább a termékekhez
            </Link>

            <Link href="/" className={styles.secondaryButton}>
              Vissza a főoldalra
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
