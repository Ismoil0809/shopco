export type Product = {
  id: string;
  name: string;
  type: "Men" | "Women";
  category: "Casual" | "Formal" | "Party" | "Gym";
  brand: string;
  description: string;
  price: {
    old: number;
    new: number;
    discountPercent: number;
  };
  rating: {
    average: number;
    count: number;
  };
  sizes: string[];
  colors: {
    name: string;
    hex: string;
  }[];
  stock: number;
  images: string[];
  isFeatured: boolean;
  status: "New arrival" | "Top selling";
  createdAt: string;
};

export type Review = {
  id: string;
  username: string;
  rating: number;
  comment: string;
  date: string;
};

export type ProductList = Product[];
