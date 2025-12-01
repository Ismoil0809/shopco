import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("~/pages/HomePage"));
const ProductPage = lazy(() => import("~/pages/ProductPage"));
const CartPage = lazy(() => import("~/pages/CartPage"));
const ProfilePage = lazy(() => import("~/pages/Profile"));
const ShopPage = lazy(() => import("~/pages/ShopPage"));
const CasualPage = lazy(() => import("~/pages/Casual"));
const FormalPage = lazy(() => import("~/pages/Formal"));
const GymPage = lazy(() => import("~/pages/Gym"));
const PartyPage = lazy(() => import("~/pages/Party"));
export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Shop list page */}
        <Route path="/shop/:type" element={<ShopPage />} />

        {/* Single product page */}
        <Route path="/shop/:type/:id" element={<ProductPage />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:section" element={<ProfilePage />} />
        <Route path="/casual" element={<CasualPage />} />
        <Route path="/formal" element={<FormalPage />} />
        <Route path="/gym" element={<GymPage />} />
        <Route path="/party" element={<PartyPage />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <h1 className="p-10 text-center text-2xl">404 - Not Found</h1>
          }
        />
      </Routes>
    </Suspense>
  );
}
