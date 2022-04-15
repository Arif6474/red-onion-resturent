import React from 'react';
import './SearchBox.css'

const SearchBox = () => {
    return (
        <div className="search-container">
            <h2 className="text-bold text-center mt-4 pt-4">Best food waiting for your bally</h2>
            <form className="d-flex w-50 mx-auto mt-4">
        <input className="border border-light ps-4 py-2 rounded-pill w-100" type="search" placeholder="Search" aria-label="Search"/>
        <button className="search-btn" >Search</button>
      </form>
        </div>
    );
};

export default SearchBox;
