"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart/CartProvider";
import styles from "@/app/checkout/CheckoutPage.module.css";

interface CheckoutFormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  companyName: string;
  postalCode: string;
  city: string;
  streetAddress: string;
  message: string;
  termsAccepted: boolean;
}

const initialFormData: CheckoutFormData = {
  customerName: "",
  customerEmail: "",
  customerPhone: "",
  companyName: "",
  postalCode: "",
  city: "",
  streetAddress: "",
  message: "",
  termsAccepted: false,
};

export default function CheckoutForm() {
  const router = useRouter();

  const { items, totalItems, totalPrice } = useCart();

  const [formData, setFormData] = useState<CheckoutFormData>(initialFormData);

  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    if (
      event.target instanceof HTMLInputElement &&
      event.target.type === "checkbox"
    ) {
      const checked = event.target.checked;

      setFormData((current) => ({
        ...current,
        [name]: checked,
      }));

      return;
    }

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+0-9\s()-]{7,20}$/;
    const postalCodePattern = /^\d{4}$/;

    if (!formData.customerName.trim()) {
      setError("Kérlek, add meg a neved.");
      return;
    }

    if (!emailPattern.test(formData.customerEmail.trim())) {
      setError("Kérlek, adj meg egy érvényes e-mail címet.");
      return;
    }

    if (!phonePattern.test(formData.customerPhone.trim())) {
      setError("Kérlek, adj meg egy érvényes telefonszámot.");
      return;
    }

    if (!postalCodePattern.test(formData.postalCode.trim())) {
      setError("Az irányítószám 4 számjegyből álljon.");
      return;
    }

    if (!formData.city.trim()) {
      setError("Kérlek, add meg a települést.");
      return;
    }

    if (!formData.streetAddress.trim()) {
      setError("Kérlek, add meg a szállítási címet.");
      return;
    }

    if (!formData.termsAccepted) {
      setError(
        "A rendelés elküldéséhez el kell fogadnod az ÁSZF-et és az adatkezelési tájékoztatót.",
      );
      return;
    }

    const orderId = `SERES-${Date.now().toString().slice(-8)}`;

    sessionStorage.setItem(
      "seres-last-order",
      JSON.stringify({
        orderId,
        items,
        totalItems,
        totalPrice,
      }),
    );

    /*
     * Ezzel jelezzük a CheckoutPage-nek,
     * hogy szándékosan hagyjuk el a checkoutot
     * egy sikeres rendelés miatt.
     */
    sessionStorage.setItem("seres-order-submitted", "true");

    console.log("Rendelési adatok:", {
      orderId,
      formData,
      items,
      totalItems,
      totalPrice,
    });

    router.push("/order-success");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="customerName">Név</label>

        <input
          id="customerName"
          name="customerName"
          type="text"
          placeholder="Teljes név"
          value={formData.customerName}
          onChange={handleChange}
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
            value={formData.customerEmail}
            onChange={handleChange}
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
            value={formData.customerPhone}
            onChange={handleChange}
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
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formSectionHeading}>
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
            inputMode="numeric"
            maxLength={4}
            placeholder="4130"
            value={formData.postalCode}
            onChange={handleChange}
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
            value={formData.city}
            onChange={handleChange}
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
          value={formData.streetAddress}
          onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <label className={styles.terms}>
        <input
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
        />

        <span>
          Elolvastam és elfogadom az{" "}
          <a href="/terms" target="_blank" rel="noreferrer">
            Általános Szerződési Feltételeket
          </a>{" "}
          és az{" "}
          <a href="/privacy" target="_blank" rel="noreferrer">
            Adatkezelési Tájékoztatót
          </a>
          .
        </span>
      </label>

      {error && (
        <p className={styles.formError} role="alert">
          {error}
        </p>
      )}

      <button type="submit" className={styles.submitButton}>
        Rendelés elküldése
      </button>
    </form>
  );
}
