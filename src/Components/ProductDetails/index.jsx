import './styles.css';

const ProductDetails = (

) => {
    return (
        <aside className="product-details flex flex-col fixed right-0 border border-gray-950 bg-white rounded-lg shadow-lg p-4">
            <div className='flex justify-between items-center p-6 mb-4'>
                <h2 className="font-medium text-xl">Detalles del producto</h2>
                <div>X</div>
                <p className="text-gray-neutral text-sm font-light">Aquí puedes ver los detalles del producto seleccionado.</p>
            </div>
        </aside>
        
    );
}

export default ProductDetails;