import React from 'react';
import useInventory from '../../../hooks/useProducts';
import Banner from '../Banner/Banner';
import Item from '../Item/Item';

const Home = () => {
    const [inventory] = useInventory();
    const spliceInventory = inventory.splice(0, 6);

    return (
        <div>
            <Banner></Banner>
            {
                spliceInventory.map(item => <Item
                    key={item._id}
                    item={item}
                >
                </Item>)
            }
        </div>
    );
};

export default Home;