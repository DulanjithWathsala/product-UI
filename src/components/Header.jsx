import { Link } from "react-router-dom";
import { useCart } from "../store/CartContext.js";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <nav className="flex space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/products" className="hover:underline">
          Get All Products
        </Link>
      </nav>
      <Link to="/cart" className="flex items-center">
        <span className="mr-2">Cart</span>
        <div className="bg-white text-blue-600 px-2 py-1 rounded-full">
          {cart.length}
        </div>
      </Link>
    </header>
  );
}
