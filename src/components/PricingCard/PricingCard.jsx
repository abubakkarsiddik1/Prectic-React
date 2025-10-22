import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    
    // { Distractaring }
const {name, price, info, features} = pricing;

    return (
        <div className='flex flex-col border bg-amber-300 rounded-2xl p-4'>
            {/* {Card Header} */}
            <div>
                <h1 className='text-3xl'>{name}</h1>
                <h4 className="text-xl">{price}</h4>
                
            </div>
            {/* Card er Body */}
            <div className='bg-amber-400 p-4 rounded-2xl mt-10 flex-1'>
                <p>{info}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index}
                    feature={feature}></PricingFeature>)
                }
            </div>
            <button className='btn w-full mt-4'>Subscribe</button>
        </div>
    );
};

export default PricingCard;