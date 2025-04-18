const Card = () => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col items-center justify-center relative">
            <figure className="relative w-full h-4/5 mb-2 flex items-center justify-center">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-gray-neutral text-xs m-2 px-3 py-0.5">
                    Skates
                </span>
                <img
                    className='w-full h-full object-cover '
                    src="https://images.pexels.com/photos/2777671/pexels-photo-2777671.png" alt="Decks"
                />
                <div className="absolute top-1 right-1 flex items-center justify-center bg-white rounded-full w-6 h-6 shadow-md font-display
                    hover:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                    +
                </div>
            </figure>
            <p className="text-gray-neutral text-sm font-light flex justify-between w-full px-2">
                <span className="text-sm font-light">Decks</span>
                <span className="text-lg font-medium">79€</span>
            </p>
        </div>
    );
}

export default Card;