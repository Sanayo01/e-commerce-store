import { useParams, Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  // Find the product by ID
  // Note: useParams returns a string, so we need to convert it or use ==
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/" className="text-blue-500 underline">Go back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    // basic feedback for the user
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white p-6 rounded shadow-sm border border-gray-200">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Image side */}
        <div className="md:w-1/2 border border-gray-200 bg-gray-50 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Details side */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h1>
          <p className="text-2xl text-blue-700 font-bold mb-4">₦{product.price.toLocaleString()}</p>
          
          <div className="mb-6 bg-gray-100 p-4 rounded border border-gray-200">
            <h3 className="font-semibold mb-1 text-gray-700">Description:</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mt-auto pt-4 border-t border-gray-200 mt-8">
            <button 
              onClick={handleAddToCart}
              className={`w-full py-3 px-4 rounded text-white font-bold text-lg mb-3 transition-colors ${
                added ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>
            <Link to="/" className="block text-center text-blue-500 hover:text-blue-700 underline">
              &lt; Back to Shop List
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
