import { LucideStar } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { products } from "~/data/products";

export default function ShopPage() {
  const { type } = useParams(); 
  const filteredProducts = products.filter(
    (p) => p.type?.toLowerCase() === type?.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {type} Collection
      </h1>

      {filteredProducts.length === 0 ? (
        <p>No products found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(
            ({ id, name, images, price, rating }) => (
              <Link
                key={id}
                to={`/shop/${type}/${slugify(name)}`}
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
                    <span className="text-sm text-gray-500">
                      {rating.average}/5
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="line-through text-gray-400">
                      ${price.old}
                    </span>
                    <span className="font-bold text-gray-900">
                      ${price.new}
                    </span>
                    {price.discountPercent > 0 && (
                      <span className="text-sm text-red-500">
                        -{price.discountPercent}%
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")      
    .replace(/[^\w-]+/g, "");  
}
