import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../../hooks/useProducts';
import Banner from '../Banner/Banner';
import Item from '../Item/Item';
import CoreValues from './CoreValues';
import Service from './Service';

const Home = () => {
    const [inventory] = useInventory();
    const sliceInventory = inventory.slice(0, 6);

    return (
        <div>
            <Banner></Banner>
            {
                sliceInventory.map(item => <Item
                    key={item._id}
                    item={item}
                >
                </Item>)
            }
            <div className='mt-4'>
                <Link to="/inventory" className='text-primary pe-auto text-decoration-none' >
                    <button className='btn btn-info m-4'>Inventory</button>
                </Link>
                <Link to="/manage" className='text-primary pe-auto text-decoration-none' >
                    <button className='btn btn-info'>Manage Inventories</button>
                </Link>
            </div>
            <Service></Service>
            <CoreValues></CoreValues>
        </div>
    );
};

export default Home;