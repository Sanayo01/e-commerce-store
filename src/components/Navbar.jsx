import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  
  // Calculating total number of items to show on the cart currently
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Vortex brand name */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Vortex=  </Link>
        
        {/* Navigation links */}
        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-200 transition-colors">
            Our Products
          </Link>
          
          <Link 
            to="/cart" 
            className="bg-blue-800 px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
          >
            <span>Cart</span>
            {/* Show badge only if items exist */}
            {itemCount > 0 && (
              <span className="bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-bold">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
