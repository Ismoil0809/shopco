import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { LucideStar } from "lucide-react";
import { Button } from "~/components";

export function ProductCard({ product }: { product: any }) {
  const { name, images, price, rating } = product;

  return (
    <Link
      to={`/shop/${product.type}/${slugify(name)}`}
      className="group block bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-shadow"
    >
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>

        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }, (_, i) => (
            <LucideStar
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating.average)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-500">({rating.count})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="line-through text-gray-400">${price.old}</span>
          <span className="font-bold text-gray-900">${price.new}</span>
          {price.discountPercent > 0 && (
            <span className="text-sm text-red-500">
              -{price.discountPercent}%
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ProductsSection() {
  const newArrivals = products.filter((p) => p.status === "New arrival");
  const topSelling = products.filter((p) => p.status === "Top selling");

  const [showAllNew, setShowAllNew] = useState(false);
  const [showAllTop, setShowAllTop] = useState(false);

  const renderProducts = (productArray: any[], showAll: boolean) => {
    if (showAll) return productArray;
    return productArray.slice(0, 4); 
  };

 return (
  <div className="space-y-16 px-6 md:px-12 py-10">
    <section id="new">
      <h2 className="text-3xl md:text-4xl text-center font-bold">New Arrivals</h2>

      <div className="mt-10">
        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory sm:hidden">
          {renderProducts(newArrivals, showAllNew).map((product: any) => (
            <div key={product.id} className="shrink-0 w-[250px] snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderProducts(newArrivals, showAllNew).map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <Button
          variant="outline"
          className="w-36 border-gray-200 rounded-4xl"
          onClick={() => setShowAllNew(!showAllNew)}
        >
          {showAllNew ? "View Less" : "View All"}
        </Button>
      </div>
    </section>

    <section id="sale">
      <h2 className="text-3xl md:text-4xl text-center font-bold">Top Selling</h2>

      <div className="mt-10">
        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory sm:hidden">
          {renderProducts(topSelling, showAllTop).map((product: any) => (
            <div key={product.id} className="shrink-0 w-[250px] snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderProducts(topSelling, showAllTop).map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <Button
          variant="outline"
          className="w-36 border-gray-200 rounded-4xl"
          onClick={() => setShowAllTop(!showAllTop)}
        >
          {showAllTop ? "View Less" : "View All"}
        </Button>
      </div>
    </section>
  </div>
);

}


function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
