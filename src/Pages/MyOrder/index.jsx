import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import Layout from "../../Components/Layout"
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let index = currentPath.split('/')[2]
  //let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)  
  if (index === 'last') index = context.order?.length - 1  

  return (
    <Layout>
      <div className='flex w-80 justify-center items-center mb-6 relative'>
        <Link to="/my-orders" className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1 className="font-medium text-xl">
          Mi pedido
        </h1>
      </div>

      <div className="flex flex-col w-80">
        {
          context.order.length > 0 ? (
            context.order?.[index]?.products.map(product => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images[0]}
                price={product.price}
              />
            ))
          ) : (
            <p className="text-center text-gray-neutral">
              No hay productos en el carrito
            </p>
          )
        }
      </div>
    </Layout>
  )
}

export default MyOrder