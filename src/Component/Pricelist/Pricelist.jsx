import React from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Pricelist = () => {
    let gymFeatures = [
        {
          id: 1,
          name: "Cardio machines",
          feature: ['A variety of cardio equipment such as treadmills', 'ellipticals', 'and stationary bikes.'],
          price: 25
        },
        {
            id: 2,
          name: "Weight lifting equipment",
          feature: ['A variety of cardio equipment such as treadmills', 'ellipticals', 'and stationary bikes.'],
          price: 30
        },
        {
            id: 3,
          name: "Group fitness classes",
          feature: ['A variety of cardio equipment such as treadmills', 'ellipticals', 'and stationary bikes.'],
          price: 40
        },
        {
            id: 4,
          name: "Personal training sessions",
          feature: ['A variety of cardio equipment such as treadmills', 'ellipticals', 'and stationary bikes.'],
          price: 60
        },
        {
            id: 5,
          name: "Locker room and shower facilities",
          feature: ['A variety of cardio equipment such as treadmills', 'ellipticals', 'and stationary bikes.'],
          price: 10
        },
        {
            id: 6,
          name: "Free Wi-Fi access",
          feature: ['A variety of cardio equipment such as treadmills', 'ellipticals', 'and stationary bikes.'],
          price: 0
        }
      ];
    
      
    return (
        <div>
            <h1 className='font-bold bg-purple-300 p-4 mx-10 mt-5 text-center text-5xl text-purple-700 rounded'>Awesome Prices</h1>
             <div className='grid md:grid-cols-3 gap-5 mx-10 my-5'>
                {
                   gymFeatures.map(features =><PriceCard key ={features.id} features = {features}></PriceCard>)
                }
               
             </div>
             
        </div>
    );
};

export default Pricelist;