"use client";

import { useState } from "react";
import { products } from "../data/products";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { ProductCard } from "./Product";

export default function CasualPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [openFilter, setOpenFilter] = useState({
    price: true,
    colors: true,
    size: true,
    style: true,
  });

  return (
    <div className="relative">
      {showFilters && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setShowFilters(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-6 md:py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <aside className="hidden md:block border border-gray-300  rounded-2xl p-5 h-fit bg-white">
          <Filters openFilter={openFilter} setOpenFilter={setOpenFilter} />
        </aside>

        <main className="col-span-1 md:col-span-3 relative">
          {showFilters && (
            <aside className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] p-5 bg-white z-50 border border-gray-300 rounded-2xl md:hidden">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 rounded-full bg-gray-200"
                >
                  <X size={20} />
                </button>
              </div>
              <Filters openFilter={openFilter} setOpenFilter={setOpenFilter} />
            </aside>
          )}

          <div className="flex justify-between items-center mb-5 gap-2">
            <h1 className="text-2xl font-bold">Party</h1>

            <div className="flex items-center gap-4 ml-auto">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowFilters(true)}
                  className="md:hidden mb-4 p-2 bg-gray-200 rounded-full"
                >
                  <SlidersHorizontal size={20} />
                </button>
                <div>
                  <span className="text-gray-400 text-[12px]">Sorted By:</span>
                  <select className="text-[12px]" defaultValue="popular">
                    <option value="popular">Popular</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products.slice(0, 9).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="flex justify-center mt-10 gap-3 items-center">
            <button className="px-4 py-2 rounded-lg border flex">
              {" "}
              <ArrowLeft className="w-4" />
              Previous
            </button>

            {/* DESKTOP — full numbers */}
            <div className="hidden sm:flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={`px-4 py-2 rounded-lg border ${
                    n === 1 ? "bg-black text-white" : ""
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>

            {/* MOBILE — collapsed pagination */}
            <div className="flex sm:hidden gap-2 items-center">
              <button className="px-4 py-2 rounded-lg border bg-black text-white">
                1
              </button>
              <span className="px-2">...</span>
              <button className="px-4 py-2 rounded-lg border">5</button>
            </div>

            <button className="px-4 py-2 rounded-lg border flex">
              Next <ArrowRight className="w-4" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------- FILTERS COMPONENT ---------- */
function Filters({ openFilter, setOpenFilter }: any) {
  return (
    <div>
      <FilterSection
        title="Price"
        open={openFilter.price}
        onClick={() =>
          setOpenFilter((prev: any) => ({ ...prev, price: !prev.price }))
        }
      >
        <div className="px-2">
          <input type="range" className="w-full" />
          <div className="flex justify-between text-sm mt-2">
            <span>$20</span>
            <span>$200</span>
          </div>
        </div>
      </FilterSection>

      <FilterSection
        title="Colors"
        open={openFilter.colors}
        onClick={() =>
          setOpenFilter((prev: any) => ({ ...prev, colors: !prev.colors }))
        }
      >
        <div className="grid grid-cols-6 gap-3 mt-2">
          {["black", "white", "red", "green", "yellow", "purple"].map(
            (c, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: c }}
              />
            )
          )}
        </div>
      </FilterSection>

      <FilterSection
        title="Size"
        open={openFilter.size}
        onClick={() =>
          setOpenFilter((prev: any) => ({ ...prev, size: !prev.size }))
        }
      >
        <div className="flex flex-wrap gap-2 mt-3">
          {["S", "M", "L", "XL", "XXL"].map((s) => (
            <button
              key={s}
              className="px-3 py-1 border rounded-full text-sm hover:bg-gray-100"
            >
              {s}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection
        title="Dress Style"
        open={openFilter.style}
        onClick={() =>
          setOpenFilter((prev: any) => ({ ...prev, style: !prev.style }))
        }
      >
        <div className="flex flex-col space-y-2 mt-3">
          {["Casual", "Formal", "Party", "Gym"].map((s) => (
            <label key={s} className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm">{s}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <button className="w-full mt-5 py-2 bg-black text-white rounded-xl hover:bg-black/90">
        Apply Filter
      </button>
    </div>
  );
}

/* ---------- FILTER SECTION COMPONENT ---------- */
function FilterSection({ title, open, onClick, children }: any) {
  return (
    <div className="border-b py-4">
      <button
        onClick={onClick}
        className="flex justify-between w-full items-center"
      >
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={`transition duration-200 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}
