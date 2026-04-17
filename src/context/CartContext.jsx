import { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("shopSphereCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("shopSphereCart", JSON.stringify(cartItems));
  }, [cartItems]);
  const [searchTerm, setSearchTerm] = useState("");
  function searchItems(input) {
    setSearchTerm(input);
  }
  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function removeFromCart(id) {
    setCartItems(cartItems.filter((e) => e.id !== id));
  }

  function clearCart() {
    setCartItems([]);
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        searchItems,
        searchTerm,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
