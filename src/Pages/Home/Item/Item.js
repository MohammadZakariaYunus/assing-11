import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = ({ item }) => {
    const { _id, name, img, company, quantity, price, about, component } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3>Product: {component}</h3>
            <h3>Product ID: {_id}</h3>
            <h4>Supplier: {name}</h4>
            <h4>Price: {price}</h4>
            <h5>Company: {company}</h5>
            <h5>Quantity: {quantity}</h5>
            <p>Product Description: {about}</p>
            <button onClick={() => navigateToItemDetail(_id)} className='btn btn-primary'>: {name}</button>
            <button className='btn btn-info'>Update</button>
        </div>
    );
};

export default Item;