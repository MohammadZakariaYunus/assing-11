import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);


    return (
        <div>
            <h2>You are Search</h2>

            <h4>{item.component}</h4>
            <h3>Product ID: {item._id}</h3>
            <h4>Supplier: {item.name}</h4>
            <h4>Price: {item.price}</h4>
            <h5>Company: {item.company}</h5>
            <h5>Quantity: {item.quantity}</h5>
            <p>Product Description: {item.about}</p>

            <form>
                <input placeholder='Product Name' className='form-control w-50 mb-2' />
            </form>

            <div className='text-center'>
                <button className='btn btn-primary'>Restock</button>
                <button className='btn btn-primary'>Delivered</button>
            </div>

        </div>
    );
};

export default ItemDetail;