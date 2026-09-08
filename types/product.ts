export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  packageSize: string;
  imageUrl: string;
  isFeatured?: boolean;
}
