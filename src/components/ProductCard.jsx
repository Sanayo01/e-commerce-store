import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded shadow-sm bg-white overflow-hidden flex flex-col">
      {/* Product Image */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover object-center border-b border-gray-200"
      />
      
      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-gray-600 font-bold mb-3">₦{product.price.toLocaleString()}</p>
        
        {/* Fill empty space so buttons align at bottom */}
        <div className="mt-auto">
          <Link 
            to={`/product/${product.id}`}
            className="block text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
