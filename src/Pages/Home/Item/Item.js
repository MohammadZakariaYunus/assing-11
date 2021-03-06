import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { _id, name, img, quantity, price, component, about } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }

    return (
        <div>
            <div className="container">
                <div className="card mt-3" >
                    <div className="row no-gutters">
                        <div className="col-5">
                            <img className="card-img" src={img} alt="" />
                        </div>
                        <div className="col-7">
                            <div className="card-body">
                                <h4 className="card-title mx-auto">{component}</h4>
                                <p>Supplier: {name}</p>
                                <p>Price: {price}</p>
                                <p>Quantity: {quantity}</p>
                                <p>{about}</p>
                                <button onClick={() => navigateToItemDetail(_id)} className='btn btn-outline btn-success'>Show Product Details...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Item;