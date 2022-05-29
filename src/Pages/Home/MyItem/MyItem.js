import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Item from '../Item/Item';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItem, setMyItem] = useState();
    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            const url = `https://secret-reef-34877.herokuapp.com/myItems?email=${email}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setMyItem(data);
        }
        getMyItems();
    }, [user]);

    return (
        <div className='min-h-screen'>
            <h1 className='text-2xl'>My Item</h1>
            <p>Item Available: {myItem?.length}</p>
            {
                myItem?.map(item => <Item
                    key={item._id}
                    item={item}
                >
                </Item>)
            }

        </div>
    );
};

export default MyItem;