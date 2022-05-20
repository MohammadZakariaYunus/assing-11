import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItem.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const addItem = {
            component: event.target.component.value,
            name: event.target.name.value,
            company: event.target.company.value,
            email: user.email,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            img: event.target.img.value,
            about: event.target.about.value,
        }
        axios.post('http://localhost:5000/product', addItem)
            .then(response => {
                console.log(response)
            });
        axios.post('http://localhost:5000/myItems', addItem)
            .then(response => {
                console.log(response)
            });
        event.target.reset();
        toast('Product Added Successfully...');

    }


    return (
        <div>
            <h1 className='m-3'>Please Add Your Products</h1>

            <form className='mt-4' onSubmit={handleSubmit}>
                <input placeholder='Product Name' className='form-control w-50 mb-2' name="component" />
                <input placeholder='Supplier Name' className='form-control w-50 mb-2' name="name" />
                <input placeholder='Company Name' className='form-control w-50 mb-2' name="company" />
                <input value={user?.email} readOnly placeholder='Email' className='form-control w-50 mb-2' name="email" />
                <input placeholder='Price' className='form-control w-50 mb-2' type="number" name="price" />
                <input placeholder='Quantity' className='form-control w-50 mb-2' type="number" name="quantity" />
                <input placeholder='Image URL' className='form-control w-50 mb-2' type="text" name="img" />
                <textarea placeholder='Description' className='form-control w-50 mb-2' name="about" />
                <input className='w-25' type="submit" value="Add Product" />
            </form>
            <ToastContainer />

        </div>
    );
};

export default AddItem;