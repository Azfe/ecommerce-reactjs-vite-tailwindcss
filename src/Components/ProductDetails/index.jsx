import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import './styles.css';

const ProductDetails = () => {
    const context = useContext(ShoppingCartContext);
    console.log("Product to show:", context.productDetailsToshow);

    return (
        <aside
            className={`${context.isProductDetailsOpen ? 'flex' : 'hidden'} product-details flex-col fixed right-0 border border-gray-950 bg-white rounded-lg shadow-lg p-4`}

        >
            <div className='flex justify-between items-center p-6 mb-4'>
                <h2 className="font-medium text-xl">Detalles del producto</h2>
                <div>
                    <XMarkIcon className="size-6 text-gray-950 cursor-pointer" />
                </div>
                <div>
                    <p className="text-gray-neutral text-sm font-light">Aquí puedes ver los detalles del producto seleccionado.</p>
                </div>
            </div>
        </aside>
    );
}

export default ProductDetails;