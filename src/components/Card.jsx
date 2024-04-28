import React from 'react'

const Card = ({ image, name, description, price }) => {
    return (
        <div className="inline-block rounded-lg overflow-hidden shadow-lg bg-gray-900 text-center w-1/3 mr-4">
          <img className="mx-auto" src={image} alt="Product"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white text-center">{name}</div>
            <p className="text-white text-base text-center">{description}</p>
            <p className="font-bold text-teal-400 text-base text-center">${price}</p>
          </div>
        </div>
    );
}

export default Card;