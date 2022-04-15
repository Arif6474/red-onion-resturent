import React from 'react';
import useItems from '../../../../hooks/useItems';
import Item from '../Item';

const Dinner = () => {
    const [dinner] = useItems();
    return (
        <div className="food-container">
            {
                dinner.map(food => <Item key={food.name} food={food}></Item>)
            }
        </div>
    );
};

export default Dinner;