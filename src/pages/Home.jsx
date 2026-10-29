import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Vortex Products</h1>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};


export default Home;
