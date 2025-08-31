import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ShoppingCartIcon, HomeIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
          🛍️ ShopEase
        </Link>

        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
          <Link to="/cart" className="relative flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <ShoppingCartIcon className="h-5 w-5" />
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
