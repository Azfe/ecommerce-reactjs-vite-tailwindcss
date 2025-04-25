import { PlusIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Card = ({ product }) => {

    const context = useContext(ShoppingCartContext);

    const showProductDetails = (productDetails) => {
        context.openProductDetails();
        context.setProductDetailsToshow(productDetails);
    }

    // Se verifica que el producto exista y tenga imágenes
    //const productImage = product?.image || 'https://placehold.co/300';
    const productImage = product?.images?.[0] || 'https://placehold.co/300';

    const addProductToCart = (event, product) => {
        event.stopPropagation(); // Evita que se dispare el evento del padre
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, product]);
        context.openCheckoutSideMenu();
        context.closeProductDetails();
        console.log('Producto añadido al carrito:', context.cartProducts);
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-md 
                hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col items-center justify-center relative"
            onClick={() => showProductDetails(product)}
        >
            <figure className="relative w-full h-4/5 mb-2 flex items-center justify-center">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-gray-neutral text-xs m-2 px-3 py-0.5">
                    {product?.category?.name || 'Sin categoría'}
                </span>
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={productImage}
                    alt={product?.title || 'Producto sin nombre'}
                />
                <button
                    className="absolute top-0 right-0 flex items-center justify-center bg-white w-6 h-6 rounded-full m-1 shadow-md font-display
                        transition-all transform hover:scale-110 hover:bg-tertiary hover:shadow-lg focus:ring-4 focus:ring-blue-300 active:scale-95
                        animation cursor-pointer duration-300 ease-in-out"
                    onClick={(event) => addProductToCart(event, product)}
                >
                    <PlusIcon className="size-4 text-gray-950"/>
                </button>
            </figure>
            <p className="text-gray-neutral text-sm font-light flex justify-between w-full px-2">
                <span className="text-sm font-light">{product?.title || 'Producto sin nombre'}</span>
                <span className="text-lg font-medium">{product?.price || 'N/A'}€</span>
            </p>
        </div>
    );
}

export default Card;