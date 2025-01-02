import React from 'react';

const ManuItem = ({item}) => {
    const {name, image, price,recipe} = item; 
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadious: '0px 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}---------</h3>
                <p>{recipe}</p>

            </div>
            <p className='text-yellow-500'>{price}</p>
        </div>
    );
};

export default ManuItem;