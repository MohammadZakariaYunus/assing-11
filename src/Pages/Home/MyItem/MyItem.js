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
            const url = `http://localhost:5000/myItems?email=${email}`
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
        <div>
            <h1>My Item</h1>
            HeroKu$99
            <p>{myItem?.length}</p>
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