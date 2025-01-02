import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ManuItem from '../../Shared/ManuItem/ManuItem';
 
const PopularManu = () => {
    const [manu, setManu] = useState([]);
    useEffect(() =>{
      fetch('manu.json')
      .then (res => res.json())
      .then(data =>{
        const popularItems = data.filter(item => item.category ==='popular')
        setManu(popularItems)})
    
    }, [])
    return (
        <section>
             <SectionTitle
             heading="From our manu"
             subHeading="Popular Item"
             >
             </SectionTitle>
             <div className='grid md:grid-cols-2 gap-4'>
                {
                    manu.map(item => <ManuItem
                    key={item.id}
                    item={item}
                    ></ManuItem>)
                }
             </div>
        </section>
    );
};

export default PopularManu;