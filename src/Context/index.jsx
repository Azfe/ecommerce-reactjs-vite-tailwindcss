import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0);  

  // Product details · open/close
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
  const openProductDetails = () => setIsProductDetailsOpen(true);
  const closeProductDetails = () => setIsProductDetailsOpen(false);

  // Product details · show product
  const [productDetailsToshow, setProductDetailsToshow] = useState({});

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{
      count, 
      setCount,
      openProductDetails,
      closeProductDetails,
      isProductDetailsOpen,
      productDetailsToshow,
      setProductDetailsToshow,
      cartProducts,
      setCartProducts,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}