import Link from "next/link";
import Container from "@/components/layout/Container";
import ProductCard from "@/components/products/ProductCard";
import styles from "./FeaturedProducts.module.css";
import { products } from "@/data/product";

export default function FeaturedProducts() {
  const featuredProducts = products
    .filter((product) => product.isFeatured)
    .slice(0, 4);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>Termékeink</span>
            <h2>Ismerd meg a Seres kedvenceket.</h2>
          </div>

          <Link href="/products" className={styles.allProductsLink}>
            Összes termék
            <span>→</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link href="/products" className={styles.mobileButton}>
          Összes termék megtekintése
        </Link>
      </Container>
    </section>
  );
}
