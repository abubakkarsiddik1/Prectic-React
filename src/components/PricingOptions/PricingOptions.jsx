import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPrisingCard from '../DaisyPrisingCard/DaisyPrisingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);

    
    return (
        <div>
            <h2 className='text-5xl'>Get our membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
                {
                    pricingData.map(pricing => <PricingCard 
                        key={pricing.id}
                        pricing={pricing}></PricingCard>)
                }

                {
                    pricingData.map(pricing => <DaisyPrisingCard 
                     key={pricing.id}
                    pricing = {pricing}></DaisyPrisingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;