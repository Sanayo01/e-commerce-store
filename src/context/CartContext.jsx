import { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    // Check if item is already in cart
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      // Increase quantity
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Add new item with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart completely
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // Increase quantity
  const increaseQuantity = (productId) => {
    setCartItems(cartItems.map(item => 
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Decrease quantity
  const decreaseQuantity = (productId) => {
    const existingItem = cartItems.find(item => item.id === productId);
    
    if (existingItem.quantity === 1) {
      removeFromCart(productId);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  // Calculate total price 
  const cartTotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      increaseQuantity, 
      decreaseQuantity,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};
