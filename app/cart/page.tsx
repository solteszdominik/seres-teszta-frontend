"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { useCart } from "@/components/cart/CartProvider";
import styles from "./CartPage.module.css";

export default function CartPage() {
  const {
    items,
    totalItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (items.length === 0) {
    return (
      <section className={styles.emptySection}>
        <Container>
          <div className={styles.emptyState}>
            <span className={styles.eyebrow}>Kosár</span>
            <h1>A kosarad még üres.</h1>
            <p>
              Nézd meg a Seres Tészta kínálatát, és válaszd ki a kedvenceidet.
            </p>

            <Link href="/products" className={styles.primaryButton}>
              Termékek megtekintése
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>Kosár</span>
          <h1>A kiválasztott termékeid.</h1>
          <p>{totalItems} termék van jelenleg a kosaradban.</p>
        </Container>
      </section>

      <section className={styles.cartSection}>
        <Container>
          <div className={styles.layout}>
            <div className={styles.items}>
              {items.map(({ product, quantity }) => (
                <article key={product.id} className={styles.item}>
                  <div className={styles.imagePlaceholder}>
                    <span>{product.name}</span>
                  </div>

                  <div className={styles.itemContent}>
                    <div className={styles.itemTop}>
                      <div>
                        <span className={styles.packageSize}>
                          {product.packageSize}
                        </span>

                        <h2>{product.name}</h2>
                      </div>

                      <button
                        type="button"
                        className={styles.removeButton}
                        onClick={() => removeFromCart(product.id)}
                      >
                        Törlés
                      </button>
                    </div>

                    <div className={styles.itemBottom}>
                      <div className={styles.quantity}>
                        <button
                          type="button"
                          aria-label="Mennyiség csökkentése"
                          onClick={() =>
                            updateQuantity(product.id, quantity - 1)
                          }
                        >
                          −
                        </button>

                        <span>{quantity}</span>

                        <button
                          type="button"
                          aria-label="Mennyiség növelése"
                          onClick={() =>
                            updateQuantity(product.id, quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <strong className={styles.itemPrice}>
                        {(product.price * quantity).toLocaleString("hu-HU")} Ft
                      </strong>
                    </div>
                  </div>
                </article>
              ))}

              <button
                type="button"
                className={styles.clearButton}
                onClick={clearCart}
              >
                Kosár ürítése
              </button>
            </div>

            <aside className={styles.summary}>
              <span className={styles.summaryLabel}>Összesítés</span>

              <div className={styles.summaryRow}>
                <span>Termékek</span>
                <strong>{totalItems} db</strong>
              </div>

              <div className={styles.summaryRow}>
                <span>Részösszeg</span>
                <strong>{totalPrice.toLocaleString("hu-HU")} Ft</strong>
              </div>

              <div className={styles.totalRow}>
                <span>Összesen</span>
                <strong>{totalPrice.toLocaleString("hu-HU")} Ft</strong>
              </div>

              <Link href="/checkout" className={styles.checkoutButton}>
                Tovább a rendeléshez
              </Link>

              <Link href="/products" className={styles.continueShopping}>
                Tovább vásárolok
              </Link>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
