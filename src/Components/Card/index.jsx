import React from 'react';

const Card = ({ product }) => {

    // Se verifica que el producto exista y tenga imágenes
    const productImage = product?.images?.[0] || 'https://placehold.co/300';

    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-md 
            hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col items-center justify-center relative"
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
                <button className="absolute top-0 right-0 flex items-center justify-center bg-white w-6 h-6 rounded-full m-1 shadow-md font-display
                    hover:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                    +
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