import AboutPreview from "@/components/home/AboutPreview";
import ContactCta from "@/components/home/ContactCta";
import FeaturedOffer from "@/components/home/FeaturedOffer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import WhySeres from "@/components/home/WhySeres";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProducts />
      <WhySeres />
      <FeaturedOffer />
      <ContactCta />
    </>
  );
}
