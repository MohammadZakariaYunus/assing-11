import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = ({ item }) => {
    const { _id, name, img, description, price } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToItemDetail(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Item;