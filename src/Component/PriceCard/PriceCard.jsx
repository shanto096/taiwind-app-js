
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({features}) => {
    return (
        <div className='bg-purple-400 p-3 flex flex-col rounded '>
            <h1 className='text-center font-bold text-2xl text-green-800'><span className='font-bold text-5xl text-white'>${features.price}</span> /mon</h1>
             <h2 className='font-bold text-xl text-gray-800 text-center p-3'>{features.name}</h2>
             <p className='font-bold text-lg text-white underline'>Feature:</p>
                  {
                    features.feature.map((f,idx) => <Feature key ={idx} f = {f}></Feature> )
                  }
                  <button className='bg-green-700 mt-auto w-full py-2 rounded-md text-white font-bold text-xl'>Buy Now</button>
        </div>
    );
};

export default PriceCard;