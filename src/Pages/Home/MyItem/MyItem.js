import React from 'react';
import './MyItem.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import useProductDetail from '../../../hooks/useProductDetail';
import { useParams } from 'react-router-dom';

const MyItem = () => {
    const { itemId } = useParams();
    const [item] = useProductDetail(itemId);
    const [user] = useAuthState(auth);
    console.log(user)



    const handleUpdate = event => {
        event.preventDefault()
        const update = {
            email: user.email,
            product: item.name,
            itemId: itemId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
    }

    return (
        <div className='container'>
            <h1>My Item</h1>
            <p>{user.displayName}</p>
            <div className="row">
                <div className="col-sm-4 col-md-6 mt-3">
                    <img className='img-fluid' src="https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                </div>

                <div className="col-sm-4 col-md-6 mt-3">
                    <h3>Update Your Information</h3>

                    <form onSubmit={handleUpdate}>
                        <input value={user?.displayName} type="text" className="form-control w-100 mb-2" readOnly disabled></input>

                        <input value={user?.email} type="email" className="form-control w-100 mb-2" readOnly disabled></input>
                        <button className='btn btn-light w-50 '>Update</button>
                    </form>
                </div>
            </div>

        </div >
    );
};

export default MyItem;