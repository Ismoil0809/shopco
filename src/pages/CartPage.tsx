import { useState } from "react";
import { useCart } from "../components";
import { Trash } from "lucide-react";
import { Button } from "~/components";
import React from "react";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQty,
    subtotal,
    discount,
    deliveryFee,
    total,
    applyPromoCode,
    promoCode,
  } = useCart();

  const [inputCode, setInputCode] = useState("");

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some products to get started!</p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-black text-white rounded hover:bg-gray-800"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4 border border-gray-200 rounded-3xl p-4">
          {cart.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-3 rounded-lg">
                <div className="flex items-center gap-4 flex-1 w-full">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h2 className="font-semibold text-1xl">{item.name}</h2>
                    <p className="text-gray-600">Color: {item.selectedColor}</p>
                    <p className="text-gray-600">Size: {item.selectedSize}</p>
                    <h3 className="text-2xl font-bold">${item.price.new}</h3>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col items-center gap-4 w-full md:w-auto">
                  <div>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeFromCart(item.key)}
                    >
                      <Trash />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-6 py-1.5">
                    <button
                      className="text-lg"
                      onClick={() => updateQty(item.key, -1)}
                      disabled={item.qty <= 1}
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.qty}</span>
                    <button
                      className="text-lg"
                      onClick={() => updateQty(item.key, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Devider ni faqat oxirgi itemdan keyin qo‘ymaymiz */}
              {index !== cart.length - 1 && <Devider />}
            </React.Fragment>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="p-6 border border-gray-200 rounded-3xl h-fit space-y-4">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Subtotal</span>
              <span className="font-bold">${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Discount</span>
              <span className="text-rose-500 font-bold">-${discount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Delivery Fee</span>
              <span className="font-bold">${deliveryFee}</span>
            </div>
            <Devider />
            <div className="flex justify-between text-lg">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          {/* Promo Code Input */}
          <div className="flex gap-1 mt-4">
            <input
              type="text"
              placeholder="Promo Code"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className="flex-1  rounded-4xl bg-gray-100 p py-1 focus:outline-none focus:ring-none pl-2"
            />
            <Button
              onClick={() => applyPromoCode(inputCode)}
              className="bg-black text-white hover:bg-gray-800 rounded-4xl"
            >
              Apply
            </Button>
          </div>
          {promoCode && promoCode === "DISCOUNT10" && (
            <p className="text-green-600 mt-1">Promo code applied!</p>
          )}

          <Button className="w-full mt-4 rounded-4xl bg-black text-white hover:bg-gray-800">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

function Devider() {
  return <div className="h-0.5 w-full  bg-gray-200 mx-auto"></div>;
}
