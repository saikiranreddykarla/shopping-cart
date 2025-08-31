import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto"
      />
      <h2 className="font-semibold text-gray-700 mt-2 line-clamp-2">{product.title}</h2>
      <p className="text-blue-600 font-bold mt-1">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
