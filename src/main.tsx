import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import { Navbar } from "./pages/Navbar";
import { Footer } from "./pages/Footer";
import { CartProvider } from "./components";
import "./index.css";
import ScrollToTop from "~/components/ScrollToTop";


const root = createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <CartProvider>
      <Navbar />
      <AppRoutes />
      <Footer/>
      <Toaster position="top-right" />
    </CartProvider>
  </BrowserRouter>
);
