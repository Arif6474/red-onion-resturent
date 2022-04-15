import React from 'react';
import Breakfast from '../../Items/Breakfast/Breakfast';
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