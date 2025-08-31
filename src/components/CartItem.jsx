import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow hover:shadow-lg transition mb-4">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.title} className="h-16 w-16 object-contain rounded-lg" />
        <div>
          <h2 className="font-medium text-gray-800">{item.title}</h2>
          <p className="text-blue-600 font-bold">${item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
        >
          <MinusIcon className="h-4 w-4" />
        </button>
        <span className="font-semibold">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
        >
          <PlusIcon className="h-4 w-4" />
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
