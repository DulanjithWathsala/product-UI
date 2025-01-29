import { useContext } from "react";
import { CartContext } from "../store/CartContext.js";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li key={index} className="border p-4 rounded shadow-md">
              <h3 className="font-bold">{item.name}</h3>
              <p>${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
