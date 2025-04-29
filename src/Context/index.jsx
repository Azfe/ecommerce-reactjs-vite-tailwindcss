import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart · Increment Quantity
  const [count, setCount] = useState(0);  

  // Product details · Open/Close
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
  const openProductDetails = () => setIsProductDetailsOpen(true);
  const closeProductDetails = () => setIsProductDetailsOpen(false);

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product details · Show Product
  const [productDetailsToshow, setProductDetailsToshow] = useState({});

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([]);  

  return (
    <ShoppingCartContext.Provider value={{
      count, 
      setCount,
      isProductDetailsOpen,
      openProductDetails,
      closeProductDetails,
      productDetailsToshow,
      setProductDetailsToshow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}