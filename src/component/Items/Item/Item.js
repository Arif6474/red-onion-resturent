import React from 'react';
import './Item.css'

const Item = ({food}) => {
    const {name, img, des, price} = food;
    return (
        <div className="food mx-auto">
        <img src={img} alt="" />
            <h4 className="title">{name}</h4>
            <p className="description">{des.slice(0, 40)}...</p>
            <p className="price">${price}</p>
            
    </div>
    );
};

export default Item;