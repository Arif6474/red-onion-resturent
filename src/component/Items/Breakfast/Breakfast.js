import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Item from '../Item/Item';
import './Breakfast.css'

const Breakfast = () => {
    const navigate = useNavigate();
    const [breakfast] = useItems();

const handleBreakfast = () => {
    navigate('/breakfast');
}
const handleLunch = () => {
    navigate('/lunch');
}
const handleDinner = () => {
    navigate('/dinner');
}




    return (
        <div >
            <div className="title-container">
                <p onClick={handleBreakfast}>Breakfast</p>
                <p onClick={handleLunch}> Lunch</p>
                <p onClick={handleDinner}>Dinner</p>
            </div>
        <div className="food-container">
           
            {
                breakfast.map(food => <Item key={food.name} food={food}></Item>)
            }
        </div>
        </div>
    );
};

export default Breakfast;