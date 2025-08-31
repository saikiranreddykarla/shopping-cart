import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { CreditCardIcon } from "@heroicons/react/24/solid";

function CartSummary() {
  const { cart } = useContext(CartContext);

  const { totalItems, totalPrice } = useMemo(() => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
    return { totalItems, totalPrice };
  }, [cart]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md h-fit sticky top-24">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
      <p className="text-gray-700">Total Items: {totalItems}</p>
      <p className="text-gray-800 font-semibold mt-2 text-lg">Total: ${totalPrice}</p>
      <button className="w-full mt-5 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl shadow-md transition">
        <CreditCardIcon className="h-5 w-5" />
        Checkout
      </button>
    </div>
  );
}

export default CartSummary;
