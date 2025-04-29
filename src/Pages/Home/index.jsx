import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetails from "../../Components/ProductDetails";

function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        //https://fakestoreapi.com/products

        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }

        const jsonData = await response.json();
        //console.log(jsonData);
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

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Layout>
      Home
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg mx-auto">
        {
          products.length > 0 ? (
            products.map((product) => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            <p>No hay productos disponibles</p>
          )
        }
        {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      </div>
      <ProductDetails />
    </Layout>
  )
}

export default Home