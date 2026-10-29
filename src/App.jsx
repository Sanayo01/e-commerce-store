import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 md:p-8 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      
      {/* Basic footer */}
      <footer className="bg-gray-800 text-white p-6 text-center mt-10">
        <p>Student E-commerce Final Project &copy; 2026</p>
      </footer>
    </>
  );
}

export default App;
