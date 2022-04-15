import React from 'react';
import useItems from '../../../hooks/useItems';
import Item from '../Item/Item';
import './Breakfast.css'

const Breakfast = () => {
    const [breakfast, setBreakfast] = useItems();
    return (
        <div className="food-container">
            {
                breakfast.map(food => <Item key={food.name} food={food}></Item>)
            }
        </div>
    );
};

export default Breakfast;