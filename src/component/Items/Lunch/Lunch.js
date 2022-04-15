import React from 'react';
import useItems from '../../../hooks/useItems';
import Item from '../Item/Item';

const Lunch = () => {
    const [lunch] = useItems();
    return (
        <div className="food-container">
            {
                lunch.map(food => <Item key={food.name} food={food}></Item>)
            }
        </div>
    );
};

export default Lunch;