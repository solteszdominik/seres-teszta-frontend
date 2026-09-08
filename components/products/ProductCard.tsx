import Link from "next/link";
import styles from "./ProductCard.module.css";
import { Product } from "@/types/product";
import AddToCartButton from "../cart/AddToCartButton";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/products/${product.slug}`} className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder}>
          <span>{product.name}</span>
        </div>
      </Link>

      <div className={styles.content}>
        <span className={styles.packageSize}>{product.packageSize}</span>

        <h3>
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>

        <p>{product.description}</p>

        <div className={styles.footer}>
          <strong>{product.price.toLocaleString("hu-HU")} Ft</strong>

          <div className={styles.actions}>
            <Link
              href={`/products/${product.slug}`}
              className={styles.detailsLink}
            >
              Részletek
            </Link>

            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </article>
  );
}
