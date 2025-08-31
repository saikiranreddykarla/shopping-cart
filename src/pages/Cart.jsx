import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

function Cart() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p className="text-center text-gray-600 mt-10">Your cart is empty 🛒</p>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Left side: Items */}
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Right side: Summary */}
      <CartSummary />
    </div>
  );
}

export default Cart;
