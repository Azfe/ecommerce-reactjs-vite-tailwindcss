import { createContext, useState, useEffect } from "react";

// Creación del contexto
export const ShoppingCartContext = createContext();

// Proveedor del contexto
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

  // Shopping Cart · Order
  const [order, setOrder] = useState([]);

  // Get products · Fetch products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get products · Search products by title
  const [searchByTitle, setSearchByTitle] = useState([]);
  console.log("searchByTitle: ", searchByTitle);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        //https://fakestoreapi.com/products

        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }

        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // El array vacío significa que se ejecuta solo al montar el componente

  /*
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  */
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
      closeCheckoutSideMenu,
      order,
      setOrder,
      products,
      setProducts,
      loading,
      setLoading,
      error,
      setError,
      searchByTitle,
      setSearchByTitle
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}