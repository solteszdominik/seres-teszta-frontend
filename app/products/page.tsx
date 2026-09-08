import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import ProductCard from "@/components/products/ProductCard";
import styles from "./ProductsPage.module.css";
import { products } from "@/data/product";

export const metadata: Metadata = {
  title: "Termékek",
  description: "Fedezd fel a Seres Tészta termékkínálatát.",
};

export default function ProductsPage() {
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>Termékeink</span>

          <h1>Tészta minden alkalomra.</h1>

          <p>
            Fedezd fel a Seres Tészta kínálatát a klasszikus levesbetétektől a
            hagyományos magyar fogások kedvenceiig.
          </p>
        </Container>
      </section>

      <section className={styles.products}>
        <Container>
          <div className={styles.top}>
            <div>
              <span className={styles.count}>{products.length} termék</span>

              <h2>Teljes kínálat</h2>
            </div>
          </div>

          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
