import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetails from "../../Components/ProductDetails";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredProducts?.length > 0) {
        return (
          context.filteredProducts?.map((product) => (
            <Card key={product.id} product={product} />
          ))
        )
      } else {
        return (
          <div className="flex items-center justify-center w-full h-full">
            <h2 className="font-medium text-xl">No hay productos que coincidan con tu búsqueda</h2>
          </div>
        )
      }
    } else {
      return (
        context.products?.map((product) => (
          <Card key={product.id} product={product} />
        ))
      )
    }
  }

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
          renderView()
        }
      </div>
      <ProductDetails />
    </Layout>
  )
}

export default Home