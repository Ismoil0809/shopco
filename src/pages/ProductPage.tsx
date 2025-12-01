import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { Settings2, Star } from "lucide-react";
import { useMemo } from "react";

import { toast } from "react-hot-toast";
import { Tab } from "@headlessui/react";
import { Button } from "~/components";
import { useCart } from "../components";
import { ProductCard } from "../pages/Product";
import { reviewData, generateFakeReviews } from "../data/review";

export default function ProductPage() {
  const { id: slug } = useParams(); // bu yerda 'id' endi aslida slug

  const product = products.find((p) => slugify(p.name) === slug);

  const [reviews, setReviews] = useState<any[]>([]);
  const [showCount, setShowCount] = useState(5);
  const [sortOrder] = useState("latest"); // latest / oldest
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const allReviews = [...reviewData, ...generateFakeReviews(10)];
    setReviews(allReviews);
  }, []);

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortOrder === "latest")
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative w-full h-96 md:h-[500px]">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating.average)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-gray-500">({product.rating.count})</span>
          </div>

          <div className="flex items-center gap-3 text-xl">
            <span className="line-through text-gray-400">
              ${product.price.old}
            </span>
            <span className="font-bold">${product.price.new}</span>
            {product.price.discountPercent > 0 && (
              <span className="text-red-500">
                -{product.price.discountPercent}%
              </span>
            )}
          </div>

          <p className="text-gray-700">{product.description}</p>
          <Devider />
          <div>
            <span className="text-[14px] text-gray-400">Select Color</span>
            <div className="flex items-center gap-3 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  title={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`relative w-8 h-8 rounded-full border transition-all ${
                    selectedColor === color.name
                      ? "border-none"
                      : "border-gray-300 hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.hex }}
                >
                  {selectedColor === color.name && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <Devider />
          <div>
            <span className="text-[14px] text-gray-400">Select Size</span>
            <div className="flex items-center gap-1.5 mt-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded-3xl hover:bg-gray-100 ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center border border-gray-400 rounded-4xl overflow-hidden">
              <button
                type="button"
                className="px-3 py-2 hover:bg-gray-100"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <div className="px-4 py-2 min-w-10 text-center select-none">
                {quantity}
              </div>
              <button
                type="button"
                className="px-3 py-2 hover:bg-gray-100"
                onClick={() =>
                  setQuantity((q) => Math.min(product.stock, q + 1))
                }
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <Button
              className="bg-black hover:bg-gray-800 w-50 text-white px-5 py-2 rounded-4xl"
              disabled={!selectedSize || !selectedColor || quantity < 1}
              onClick={() => {
                if (selectedSize && selectedColor && quantity > 0) {
                  for (let i = 0; i < quantity; i++) {
                    addToCart(product, selectedColor, selectedSize);
                  }
                  toast.success(`${product.name} added to cart`);
                  navigate("/cart");
                }
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <Tab.Group defaultIndex={1}>
        <Tab.List className="flex justify-between gap-2">
          {["Product Details", "Rating & Reviews", "FAQs"].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `${
                  selected
                    ? "text-1xl text-black border-b-2 border-black"
                    : "text-gray-500"
                } pb-2 focus:outline-none focus:ring-0 w-full text-center cursor-pointer`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-4 space-y-6">
          <Tab.Panel>
            <p>{product.description}</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Category: {product.category}</li>
              <li>Brand: {product.brand}</li>
              <li>Stock: {product.stock}</li>
            </ul>
          </Tab.Panel>

          <Tab.Panel>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">All Reviews</h3>
             <div className="flex items-center gap-3">
              <button className="p-2 bg-gray-200 rounded-full ">

                <Settings2 />
              </button>
              
              <Button  className="bg-black text-white rounded-4xl">Write a review</Button>
             </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {sortedReviews.slice(0, showCount).map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow flex flex-col gap-2"
                >
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.round(rev.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}

                    <span className="text-gray-500 text-sm ml-2">
                      {rev.rating}/5
                    </span>
                  </div>
                  <h4 className="font-semibold">{rev.username}</h4>

                  <p className="text-gray-700">{rev.comment}</p>
                  <span className="text-gray-500 text-sm">{rev.date}</span>
                </div>
              ))}
            </div>

            {reviews.length > 5 && (
              <div className="text-center mt-6">
                <Button
                  onClick={() => {
                    if (showCount < reviews.length) {
                      setShowCount(showCount + 5);
                    } else {
                      setShowCount(5); // qayta qisqartirish
                    }
                  }}
                  className="rounded-4xl p-5 border border-gray-300 hover:bg-gray-50"
                >
                  {showCount < reviews.length
                    ? "Load More Reviews"
                    : "View Less Reviews"}
                </Button>
              </div>
            )}
          </Tab.Panel>

          <Tab.Panel>
            <p>Frequently Asked Questions about {product.name}.</p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <YouMightLike
        topSelling={products.filter((p) => p.status === "Top selling")}
        newArrival={products.filter((p) => p.status === "New arrival")}
      />
    </div>
  );
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-") 
    .replace(/[^\w-]+/g, ""); 
}

function YouMightLike({
  topSelling,
  newArrival,
}: {
  topSelling: any[];
  newArrival: any[];
}) {
  // faqat bir marta hisoblash va 4 ta mahsulotni olamiz
  const shuffled = useMemo(() => {
    const combined = [...topSelling, ...newArrival];
    return combined.slice(-4);
  }, [topSelling, newArrival]);

  return (
    <section className="mt-16">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-6">
        You Might Also Like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shuffled.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function Devider() {
  return <div className="h-0.5 w-full bg-gray-300"></div>;
}
