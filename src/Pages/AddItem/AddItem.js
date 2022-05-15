import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div>
            <h1 className='m-3'>Please Add Your Products</h1>

            <form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Product Name' className='form-control w-50 mb-2' {...register("component")} />
                <input placeholder='Supplier Name' className='form-control w-50 mb-2' {...register("name")} />
                <input placeholder='Company Name' className='form-control w-50 mb-2' {...register("company")} />
                <input value={user?.email} placeholder='Email' className='form-control w-50 mb-2' {...register("email")} />
                <input placeholder='Price' className='form-control w-50 mb-2' type="number" {...register("price")} />
                <input placeholder='Quantity' className='form-control w-50 mb-2' type="number" {...register("quantity")} />
                <input placeholder='Image URL' className='form-control w-50 mb-2' type="text" {...register("img")} />
                <textarea placeholder='Description' className='form-control w-50 mb-2' {...register("about")} />
                <input className='w-25' type="submit" value="Add Product" />
            </form>

        </div>
    );
};

export default AddItem;