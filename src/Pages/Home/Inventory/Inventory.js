import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Inventory = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])
    return (
        <div>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Services</h1>
                <div className="services-container">
                    {
                        inventory.map(item => <Item
                            key={item._id}
                            item={item}
                        >
                        </Item>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Inventory;