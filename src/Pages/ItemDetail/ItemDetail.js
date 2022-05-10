import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    return (
        <div>
            <h2>You are about to book: {itemId}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${itemId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>

        </div>
    );
};

export default ItemDetail;