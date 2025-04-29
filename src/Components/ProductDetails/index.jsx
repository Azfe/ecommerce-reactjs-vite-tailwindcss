import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import './styles.css';

const ProductDetails = () => {
    const context = useContext(ShoppingCartContext);
    //console.log("Product to show:", context.productDetailsToshow);

    const product = context.productDetailsToshow || {}; // Si es undefined, usa un objeto vacío
    const productImage = product.images?.[0] || 'https://placehold.co/300'; // Maneja images[0] 

    return (
        <aside
            className={`${context.isProductDetailsOpen ? 'flex' : 'hidden'} product-details flex-col fixed right-0 border border-gray-950 bg-white rounded-lg shadow-lg p-4`}

        >
            <div className='flex justify-between items-center p-6 mb-4'>
                <h2 className="font-medium text-xl">Detalles del producto</h2>
                <div>
                    <XMarkIcon
                        className="size-6 text-gray-950 cursor-pointer"
                        onClick={() => context.closeProductDetails()}
                    />
                </div>
            </div>
            <figure className="px-6">
                <img
                    src={productImage}
                    alt={product.title || 'Producto sin nombre'}
                    className="w-full h-full object-cover rounded-lg"
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>{product.price ? `${product.price}€` : 'N/A'}</span>
                <span className='font-medium text-md'>{product.title || 'Producto sin nombre'}</span>
                <span className='font-light text-sm'>{product.description || 'Producto sin nombre'}</span>
            </p>
        </aside>
    );
}

export default ProductDetails;