import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetails from "../../Components/ProductDetails";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  if (context.loading) return <div>Cargando...</div>;
  if (context.error) return <div>Error: {error}</div>;

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <h1 className='font-medium text-xl'>
          Productos exclusivos de skate
        </h1>
      </div>
      <input
        type="text"
        placeholder="Busca tu producto"
        className="rounded-lg border border-gray-neutral w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg mx-auto">
        {
          context.products.length > 0 ? (
            context.products.map((product) => (
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