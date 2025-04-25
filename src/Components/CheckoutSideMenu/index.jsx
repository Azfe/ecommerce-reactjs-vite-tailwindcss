import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard';
import './styles.css';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

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
            <div className="overflow-y-scroll">
                {
                    context.cartProducts.length > 0 ? (
                        context.cartProducts.map(product => (
                            <OrderCard
                                key={product.id}
                                title={product.title}
                                imageUrl={product.images[0]}
                                price={product.price}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-neutral">No hay productos en el carrito</p>
                    )
                }
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;