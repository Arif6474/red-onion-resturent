import React from 'react';
import './Meals.css'
import { Link } from 'react-router-dom';

const Meals = () => {
    return (
        <div className="meals">
            <Link to='/breakfast'>Breakfast</Link>
            <Link to='/lunch'>Lunch</Link>
            <Link to='/dinner'>Dinner</Link>
        </div>
    );
};

export default Meals;