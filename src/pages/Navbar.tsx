import React from "react";
import {
  ChevronDown,
  LucideSearch,
  ShoppingCart,
  UserRound,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../components";
import {
  Input,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui";

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { totalItems } = useCart();

  // --- scroll function ---
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- return Navbar ---
  return (
    <header className="bg-white  sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="font-extrabold text-3xl text-gray-900">
          Shop.<span className="text-gray-700">Co</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-black font-medium transition-colors">
                Shop <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48 bg-white shadow-lg rounded-lg border border-gray-200 p-2">
              <DropdownMenuLabel className="text-gray-500 font-semibold">
                Categories
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="my-1" />

              <DropdownMenuItem asChild className="rounded hover:bg-gray-100">
                <Link to="/shop/Men" className="w-full block px-2 py-1">
                  Men
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="rounded hover:bg-gray-100">
                <Link to="/shop/Women" className="w-full block px-2 py-1">
                  Women
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            onClick={() => handleScroll("sale")}
            className="text-gray-700 hover:text-black"
          >
            On Sale
          </button>
          <button
            onClick={() => handleScroll("new")}
            className="text-gray-700 hover:text-black"
          >
            New Arrivals
          </button>
          <button
            onClick={() => handleScroll("brands")}
            className="text-gray-700 hover:text-black"
          >
            Brands
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex">
            <LucideSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search…"
              className="pl-12 pr-6 py-2 w-48 md:w-74 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-black cursor-pointer" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-black text-white text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <Link to="/profile">
            <UserRound className="h-6 w-6 text-gray-700 hover:text-black cursor-pointer" />
          </Link>

          <button
            className="md:hidden z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40">
          <div className="flex flex-col items-start px-6 py-4 gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-700 hover:text-black align-middle whitespace-nowrap">
                  <span className="inline-block">Shop</span>
                  <span className="inline-block align-middle ml-1">
                    <ChevronDown className="h-4 w-4 inline-block align-middle" />
                  </span>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-48 bg-white shadow-lg rounded-lg border border-gray-200 p-2">
                <DropdownMenuLabel className="text-gray-500 font-semibold">
                  Categories
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="my-1" />

                <DropdownMenuItem asChild className="rounded hover:bg-gray-100">
                  <Link to="/shop/Men" className="w-full block px-2 py-1">
                    Men
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="rounded hover:bg-gray-100">
                  <Link to="/shop/Women" className="w-full block px-2 py-1">
                    Women
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => handleScroll("sale")}
              className="text-gray-700 hover:text-black"
            >
              On Sale
            </button>
            <button
              onClick={() => handleScroll("new")}
              className="text-gray-700 hover:text-black"
            >
              New Arrivals
            </button>
            <button
              onClick={() => handleScroll("brands")}
              className="text-gray-700 hover:text-black"
            >
              Brands
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
