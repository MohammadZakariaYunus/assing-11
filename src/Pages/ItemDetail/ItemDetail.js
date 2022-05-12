import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    });

    return (
        <div>
            <h2>You are Search</h2>
            <h4>{item.component}</h4>
            <div className='text-center'>
                <Link to={`//${itemId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>

        </div>
    );
};

export default ItemDetail;