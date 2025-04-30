import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard';
import { totalPrice } from '../../Utils';
import './styles.css';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    // Delete product from cart
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.count - 1);
        console.log('Producto eliminado del carrito:', context.cartProducts);
    }

    const handleCheckout = () => {
        const orderToCheckout = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToCheckout])
        context.setCartProducts([])
        //context.setSearchByTitle(null)
    }

    return (
        <aside
            className={
                `${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} 
                checkout-side-menu flex-col fixed right-0 border border-gray-950 bg-white rounded-lg shadow-lg p-4`
            }
        >
            <div className='flex justify-between items-center p-6 mb-4'>
                <h2 className="font-medium text-xl">Mi pedido</h2>
                <div>
                    <XMarkIcon
                        className="size-6 text-gray-950 cursor-pointer"
                        onClick={() => context.closeCheckoutSideMenu()}
                    />
                </div>
            </div>
            <div className="overflow-y-scroll flex-1">
                {
                    context.cartProducts.length > 0 ? (
                        context.cartProducts.map(product => (
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imageUrl={product.images[0]}
                                price={product.price}
                                handleDelete={handleDelete}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-neutral">No hay productos en el carrito</p>
                    )
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-medium'>Total: </span>
                    <span className='font-medium text-2xl'>{totalPrice(context.cartProducts)}€</span>
                </p>
                <Link to='/my-orders/last'>
                    <button
                        className='w-full bg-primary text-white rounded-lg p-3 mt-4 hover:bg-tertiary transition-colors duration-300 cursor-pointer'
                        onClick={() => handleCheckout()}
                    >
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;