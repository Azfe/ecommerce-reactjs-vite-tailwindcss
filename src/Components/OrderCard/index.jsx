import { XMarkIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/16/solid';

const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props; // Desestructuración del objeto
    let renderTrashIcon
    if (handleDelete) {
        renderTrashIcon =
            <TrashIcon
                className="size-5 text-gray-neutral cursor-pointer"
                onClick={() => handleDelete(id)}
            />
    }

    return (
        <div className="flex justify-between items-center gap-2 mb-3">
            <div className="flex items-center gap-2">
                {/* Image */}
                <figure className="w-20 h-20 flex-shrink-0">
                    <img
                        className="w-full h-full object-cover rounded-lg"
                        src={imageUrl}
                        alt={title || 'Producto sin nombre'}
                    />
                </figure>
                {/* Title */}
                <p className="text-sm font-light line-clamp-2">
                    {title || 'Producto sin nombre'}
                </p>
            </div>
            <div className="flex items-center gap-2">
                {/* Price */}
                <p className="text-lg font-medium">{price || 'N/A'}€</p>
                {/* Button close */}
                {renderTrashIcon}
            </div>
        </div>
    )
}

export default OrderCard