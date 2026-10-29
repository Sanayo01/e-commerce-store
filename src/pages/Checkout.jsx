// Checkout page with simple forms
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
  });

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Nothing to checkout</h2>
        <button onClick={() => navigate('/')} className="text-blue-500 underline">Go Home</button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate checkout process
    alert(`Order Placed Successfully for ${formData.name}!\nTotal: ₦${cartTotal.toLocaleString()}`);
    // Then user might be redirected or cart cleared. We'll just go home.
    navigate('/');
    // Note: normally we would clear the cart and empty context here, but keeping it simple for the learning project
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded border border-gray-200 shadow-sm mt-5">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Checkout</h1>
      
      <div className="mb-8 p-4 bg-blue-50 rounded border border-blue-100 flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">Order Total</h3>
          <p className="text-sm text-gray-600">{cartItems.length} item(s) in your order.</p>
        </div>
        <div className="text-2xl font-bold text-blue-800">
          ₦{cartTotal.toLocaleString()}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-gray-700 mb-1">Full Name:</label>
          <input 
            type="text" 
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50" 
            placeholder="e.g. Jane Doe"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1">Shipping Address:</label>
          <textarea 
            name="address"
            required
            value={formData.address}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 h-24 resize-none"
            placeholder="123 Main St, City, Country"
          ></textarea>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1">Phone Number:</label>
          <input 
            type="tel" 
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2.5 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
            placeholder="e.g. +1 234 567 8900"
          />
        </div>
        
        <div className="mt-4 border-t pt-6">
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-3.5 rounded hover:bg-blue-700 transition shadow-sm text-lg block text-center"
          >
            Confirm & Place Order
          </button>
          <button 
            type="button"
            onClick={() => navigate('/cart')}
            className="w-full bg-gray-100 text-gray-700 font-semibold py-3 mt-3 rounded hover:bg-gray-200 transition text-center"
          >
            Back to Cart
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
