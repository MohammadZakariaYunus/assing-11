import React from 'react';
import useInventory from '../../../hooks/useProducts';
import Item from '../Item/Item';

const Inventory = () => {
    const [inventory] = useInventory();
    return (
        <div>
            <div className="row">
                <h1 className='text-primary text-center mt-5'>Inventory</h1>
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