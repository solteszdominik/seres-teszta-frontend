"use client";

import { Product } from "@/types/product";
import { useCart } from "@/components/cart/CartProvider";
import { shopConfig } from "@/config/shop";
import styles from "./AddToCartButton.module.css";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export default function AddToCartButton({
  product,
  className = "",
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  if (!shopConfig.enabled) {
    return null;
  }

  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      onClick={() => addToCart(product)}
    >
      Kosárba
    </button>
  );
}
