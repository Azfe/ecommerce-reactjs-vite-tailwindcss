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
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get products · Search products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  // Get products · Search products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

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

  const filteredProductsByTitle = (products, searchByTitle) => {
    return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredProductsByCategory = (products, searchByCategory) => {
    return products?.filter(product => product.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, products, searchByTitle, searchByCategory) => {    
    if (searchType === 'BY_TITLE') {
      return filteredProductsByTitle(products, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredProductsByCategory(products, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredProductsByCategory(products, searchByCategory).filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return products
    }
  }
      
  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredProducts(filterBy('BY_TITLE_AND_CATEGORY', products, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredProducts(filterBy('BY_TITLE', products, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredProducts(filterBy('BY_CATEGORY', products, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredProducts(filterBy(null, products, searchByTitle, searchByCategory))
  }, [products, searchByTitle, searchByCategory])

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
      setSearchByTitle,
      filteredProducts,
      setFilteredProducts,
      searchByCategory,
      setSearchByCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}