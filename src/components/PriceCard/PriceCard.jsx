/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col mb-12'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold text-purple-700'>{price.price}</span>
                <span className='text-2xl font-bold'>/Month</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-6'>{price.name}</h5>
            <p className='underline font-bold text-white'>Features</p>
            {
                price.features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
            <button className='w-full bg-green-500 py-2 rounded-md text-white font-bold mt-auto hover:bg-green-700'>Buy Now</button>
        </div>
    );
};

export default PriceCard;