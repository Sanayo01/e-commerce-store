import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20 p-10 bg-white rounded border">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="mb-6 text-gray-600">Looks like you haven't added any products yet.</p>
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 border-b pb-2 text-gray-800">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items List */}
        <div className="lg:w-2/3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center border border-gray-200 p-4 mb-4 rounded bg-white shadow-sm">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              
              <div className="sm:ml-4 flex-grow text-center sm:text-left mt-4 sm:mt-0">
                <Link to={`/product/${item.id}`} className="font-bold text-lg text-blue-600 hover:underline">
                  {item.name}
                </Link>
                <p className="text-gray-600">₦{item.price.toLocaleString()}</p>
              </div>
              
              {/* Quantity Controls */}
              <div className="flex items-center my-4 sm:mx-4 bg-gray-100 rounded border border-gray-300">
                <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 font-bold border-r border-gray-300">-</button>
                <span className="px-4 font-semibold">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 font-bold border-l border-gray-300">+</button>
              </div>
              
              <div className="text-center sm:text-right sm:ml-4 min-w-[80px]">
                <p className="font-bold block mb-2">₦{(item.price * item.quantity).toLocaleString()}</p>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Cart Summary */}
        <div className="lg:w-1/3">
          <div className="bg-gray-100 p-6 rounded border border-gray-200 sticky top-4">
            <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">Order Summary</h2>
            
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Items Subtotal:</span>
              <span className="font-semibold">₦{cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-4 text-green-600">
              <span>Shipping:</span>
              <span>Free (Student Promo)</span>
            </div>
            
            <div className="flex justify-between font-bold text-2xl border-t border-gray-300 pt-4 mb-6 text-gray-800">
              <span>Total:</span>
              <span>₦{cartTotal.toLocaleString()}</span>
            </div>
            
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>
            <Link to="/" className="block text-center mt-4 text-blue-600 hover:underline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
