import { type ProductList } from "./type";

const categories = ["Casual", "Formal", "Party", "Gym"];

//@ts-ignore
export const products: ProductList = [
  {
    id: "5ef02d4f-12f8-4772-ba66-4662132eac12",
    type: "Men",
    name: "T-shirt with Tape Details",
    brand: "Rawline",
    description:
      "Minimalist black t-shirt with stylish tape details on sleeves for a modern streetwear look.",
    price: {
      old: 140,
      new: 120,
      discountPercent: 15,
    },
    rating: {
      average: 4.5,
      count: 102,
    },
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      {
        name: "Black",
        hex: "#1B1B1B",
      },
      {
        name: "White",
        hex: "#F5F5F5",
      },
      {
        name: "Gray",
        hex: "#7D7D7D",
      },
    ],
    stock: 73,
    images: ["/images/p1.png"],
    isFeatured: true,
    status: "New arrival",
    createdAt: "2025-11-05T12:00:00Z",
  },

  {
    id: "ac1613cc-adfa-49d0-8f27-5d203de13856",
    type: "Men",
    name: "Skinny Fit Jeans",
    brand: "DenimCo",
    description:
      "Classic skinny-fit jeans designed for comfort and durability. Perfect for casual everyday wear.",
    price: {
      old: 260,
      new: 240,
      discountPercent: 20,
    },
    rating: {
      average: 3.5,
      count: 55,
    },
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      {
        name: "Denim Blue",
        hex: "#305A82",
      },
      {
        name: "Dark Wash",
        hex: "#1C2A39",
      },
      {
        name: "Light Wash",
        hex: "#7A9EB1",
      },
    ],
    stock: 90,
    images: ["/images/p2.png"],
    isFeatured: true,
    status: "New arrival",
    createdAt: "2025-11-05T12:00:00Z",
  },

  {
    id: "dced891c-85f1-4da6-b02f-37b602e9cddc",
    type: "Men",
    name: "Checkered Shirt",
    brand: "Rawline",
    description:
      "A timeless checkered shirt made with premium cotton for both comfort and durability.",
    price: {
      old: 200,
      new: 180,
      discountPercent: 10,
    },
    rating: {
      average: 4.5,
      count: 61,
    },
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      {
        name: "Red-Blue Check",
        hex: "#A52A2A",
      },
      {
        name: "Black-White Check",
        hex: "#000000",
      },
      {
        name: "Green-White Check",
        hex: "#228B22",
      },
    ],
    stock: 42,
    images: ["/images/p3.png"],
    isFeatured: true,
    status: "New arrival",
    createdAt: "2025-11-05T12:00:00Z",
  },

  {
    id: "5acd450e-e611-40ac-a0f1-c8d26762ecd5",
    type: "Men",
    name: "SLEEVE STRIPED T-SHIRT",
    brand: "UrbanLine",
    description:
      "Vertical striped green shirt that combines elegance and comfort.",
    price: {
      old: 160,
      new: 130,
      discountPercent: 30,
    },
    rating: {
      average: 5,
      count: 134,
    },
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      {
        name: "Olive Stripe",
        hex: "#3E5F41",
      },
      {
        name: "Navy Stripe",
        hex: "#2B3A4B",
      },
      {
        name: "Gray Stripe",
        hex: "#6E7B8B",
      },
    ],
    stock: 39,
    images: ["/images/p4.png"],
    isFeatured: true,
    status: "New arrival",
    createdAt: "2025-11-05T12:00:00Z",
  },

  {
    id: "5acd450e-e611-40ac-a0f1-c8d26762ecd5",
    type: "Men",
    name: "Vertical Striped Shirt",
    brand: "UrbanLine",
    description:
      "Vertical striped green shirt that combines elegance and comfort.",
    price: {
      old: 232,
      new: 212,
      discountPercent: 20,
    },
    rating: {
      average: 5,
      count: 134,
    },
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      {
        name: "Olive Stripe",
        hex: "#3E5F41",
      },
      {
        name: "Navy Stripe",
        hex: "#2B3A4B",
      },
      {
        name: "Gray Stripe",
        hex: "#6E7B8B",
      },
    ],
    stock: 39,
    images: ["/images/p5.png"],
    isFeatured: true,
    status: "Top selling",
    createdAt: "2025-11-05T12:00:00Z",
  },

  {
    id: "f6cfb04e-e5ad-4e9e-99f7-a454f9bbab55",
    type: "Men",
    name: "Courage Graphic T-shirt",
    brand: "Rawline",
    description:
      "Bold graphic tee that expresses courage and energy. A must-have for casual outfits.",
    price: {
      old: 170,
      new: 145,
      discountPercent: 15,
    },
    rating: {
      average: 4,
      count: 49,
    },
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      {
        name: "Orange",
        hex: "#E96A3F",
      },
      {
        name: "Yellow",
        hex: "#F2C14E",
      },
      {
        name: "Red",
        hex: "#D72631",
      },
    ],
    stock: 65,
    images: ["/images/p6.png"],
    isFeatured: true,
    status: "Top selling",
    createdAt: "2025-11-05T12:00:00Z",
  },
  {
    id: "b45803c9-1c4c-43d1-a2f4-a60caaf87b71",
    type: "Women",
    name: "Loose Fit Bermuda Shorts",
    brand: "DenimCo",
    description:
      "Casual denim shorts with a relaxed fit, designed for maximum comfort in warm weather.",
    price: {
      old: 90,
      new: 80,
      discountPercent: 10,
    },
    rating: {
      average: 3,
      count: 33,
    },
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      {
        name: "Light Blue",
        hex: "#6A8EB5",
      },
      {
        name: "Dark Blue",
        hex: "#324A6E",
      },
      {
        name: "Gray",
        hex: "#7D7D7D",
      },
    ],
    stock: 44,
    images: ["/images/p7.png"],
    isFeatured: true,
    status: "Top selling",
    createdAt: "2025-11-05T12:00:00Z",
  },
  {
    id: "0597bf4e-fdd3-46c8-8128-547e2f6928a5",
    type: "Women",
    name: "Faded Skinny Jeans",
    brand: "DenimCo",
    description:
      "Black faded skinny jeans for a sleek, modern streetwear style.",
    price: {
      old: 240,
      new: 210,
      discountPercent: 15,
    },
    rating: {
      average: 4.5,
      count: 76,
    },
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      {
        name: "Black Fade",
        hex: "#1E1E1E",
      },
      {
        name: "Blue Fade",
        hex: "#3A506B",
      },
      {
        name: "Gray Fade",
        hex: "#7D7D7D",
      },
    ],
    stock: 59,
    images: ["/images/p8.png"],
    isFeatured: true,
    status: "Top selling",
    createdAt: "2025-11-05T12:00:00Z",
  },

  {
    id: "3d785167-570b-456d-87b9-ca15ab174273",
    type: "Women",
    name: "Jeans",
    brand: "DenimCo",
    description:
      "Black faded skinny jeans for a sleek, modern streetwear style.",
    price: {
      old: 240,
      new: 210,
      discountPercent: 15,
    },
    rating: {
      average: 4.3,
      count: 76,
    },
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      {
        name: "Black Fade",
        hex: "#1E1E1E",
      },
      {
        name: "Blue Fade",
        hex: "#3A506B",
      },
      {
        name: "Gray Fade",
        hex: "#7D7D7D",
      },
    ],
    stock: 59,
    images: ["/images/p8.png"],
    isFeatured: true,
    status: "Top selling",
    createdAt: "2025-11-05T12:00:00Z",
  },

  {
    id: "5ae99539-d97a-4264-8779-e9a9fb0cf98a",
    type: "Women",
    name: "Jumper",
    brand: "DenimCo",
    description:
      "Black faded skinny jumper for a sleek, modern streetwear style.",
    price: {
      old: 240,
      new: 210,
      discountPercent: 15,
    },
    rating: {
      average: 4.6,
      count: 96,
    },
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      {
        name: "Black Fade",
        hex: "#1E1E1E",
      },
      {
        name: "Blue Fade",
        hex: "#3A506B",
      },
      {
        name: "Gray Fade",
        hex: "#7D7D7D",
      },
    ],
    stock: 59,
    images: ["/images/p3.png"],
    isFeatured: true,
    status: "New arrival",
    createdAt: "2025-11-05T12:00:00Z",
  },

  {
    id: "2f623290-91a0-4123-b9c3-665b83a3d279",
    type: "Men",
    name: "One Life Graphic T-Shirt",
    brand: "Rawline",
    description:
      "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    price: {
      old: 300,
      new: 260,
      discountPercent: 40,
    },
    rating: {
      average: 4.5,
      count: 87,
    },
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      {
        name: "Olive Green",
        hex: "#585C43",
      },
      {
        name: "Dark Green",
        hex: "#2D3C35",
      },
      {
        name: "Navy Blue",
        hex: "#2B2D42",
      },
    ],
    stock: 58,
    images: ["/images/p.png"],
    isFeatured: true,
    status: "New arrival",
    createdAt: "2025-11-05T12:00:00Z",
  },

  {
    id: "c4e5f6a7-b8c9-4d0e-9f1a-2b3c4d5e6f7g",
    type: "Men",
    name: "Polo with Contrast Trims",
    brand: "Rawline",
    description:
      "Classic polo shirt with contrasting trims on collar and sleeves for a refined look.",
    price: {
      old: 242,
      new: 112,
      discountPercent: 15,
    },
    rating: {
      average: 4.2,
      count: 78,
    },
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      {
        name: "Navy Blue",
        hex: "#1D3557",
      },
      {
        name: "White",
        hex: "#F1FAEE",
      },
      {
        name: "Gray",
        hex: "#A8A8A8",
      },
    ],
    stock: 65,
    images: ["/images/p12.png"],
    isFeatured: true,
    status: "New arrival",
    createdAt: "2025-11-05T12:00:00Z",
  },

  {
    id: "d1f3e8b4-3c4e-4f5a-9f7e-8c9d6e7f8a9b",
    type: "Women",
    name: "Gradient Graphic T-shirt",
    brand: "Fashionista",
    description:
      "Lightweight floral summer dress perfect for warm weather. Features a flattering fit and vibrant print.",
    price: {
      old: 180,
      new: 150,
      discountPercent: 20,
    },
    rating: {
      average: 3.5,
      count: 120,
    },
    sizes: ["Small", "Medium", "Large"],
    colors: [
      {
        name: "Floral Pink",
        hex: "#FFC0CB",
      },
      {
        name: "Floral Blue",
        hex: "#ADD8E6",
      },
    ],
    stock: 80,
    images: ["/images/p9.png"],
    isFeatured: true,
    status: "Top selling",
    createdAt: "2025-11-05T12:00:00Z",
  },

  {
    id: "e2b4c6d8-9f7e-4a5b-8c9d-0e1f2a3b4c5d",
    type: "Men",
    name: "Polo with Tipping Details",
    brand: "Rawline",
    description:
      "Classic polo shirt with contrasting tipping details on collar and sleeves for a refined look.",
    price: {
      old: 250,
      new: 180,
      discountPercent: 13,
    },
    rating: {
      average: 4.5,
      count: 88,
    },
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      {
        name: "Navy Blue",
        hex: "#1D3557",
      },
      {
        name: "White",
        hex: "#F1FAEE",
      },
      {
        name: "Gray",
        hex: "#A8A8A8",
      },
    ],
    stock: 70,
    images: ["/images/p10.png"],
    isFeatured: true,
    status: "New arrival",
    createdAt: "2025-11-05T12:00:00Z",
  },
  {
    id: "f3c4d5e6-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
    type: "Men",
    name: "Black Striped T-shirt",
    brand: "UrbanLine",
    description:
      "Casual black t-shirt with subtle striped pattern for a modern and versatile look.",
    price: {
      old: 150,
      new: 130,
      discountPercent: 10,
    },
    rating: {
      average: 5.0,
      count: 95,
    },
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      {
        name: "Black",
        hex: "#000000",
      },
      {
        name: "Gray",
        hex: "#4F4F4F",
      },
      {
        name: "White",
        hex: "#FFFFFF",
      },
    ],
    stock: 85,
    images: ["/images/p11.png"],
    isFeatured: true,
    status: "Top selling",
    createdAt: "2025-11-05T12:00:00Z",
  },
].map((p) => ({
  ...p,
  category: categories[Math.floor(Math.random() * categories.length)],
}));
