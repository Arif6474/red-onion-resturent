import React from 'react';
import Breakfast from '../../Items/Breakfast/Breakfast';
import Dinner from '../../Items/Item/Dinner/Dinner';
import Lunch from '../../Items/Lunch/Lunch';
import Meals from '../../Items/Meals/Meals';
import SearchBox from '../../SearchBox/SearchBox';

const Home = () => {
    return (
        <div>
           <SearchBox></SearchBox>
           
           <Breakfast></Breakfast>
           
        </div>
    );
};

export default Home;