import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import styles from "./ProductDetailPage.module.css";
import { products } from "@/data/product";

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Termék nem található",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.visual}>
            <div className={styles.imagePlaceholder}>
              <span>{product.name}</span>
              <small>Termékfotó helye</small>
            </div>
          </div>

          <div className={styles.content}>
            <span className={styles.eyebrow}>Seres Tészta</span>

            <h1>{product.name}</h1>

            <p className={styles.description}>{product.description}</p>

            <div className={styles.info}>
              <div>
                <span>Kiszerelés</span>
                <strong>{product.packageSize}</strong>
              </div>

              <div>
                <span>Ár</span>
                <strong>{product.price.toLocaleString("hu-HU")} Ft</strong>
              </div>
            </div>

            <div className={styles.availability}>
              <span className={styles.statusDot} />
              Elérhető
            </div>

            <button type="button" className={styles.cartButton}>
              Kosárba
            </button>

            <div className={styles.details}>
              <div>
                <strong>Minőségi alapanyagok</strong>
                <p>
                  Gondosan válogatott összetevőkből készülő, hagyományos tészta.
                </p>
              </div>

              <div>
                <strong>Felhasználás</strong>
                <p>
                  Klasszikus magyar ételekhez és hétköznapi fogásokhoz egyaránt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
