import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
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
        <div className='w-75 mx-auto'>
            <h1>Please Add Your Products</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Product Name' className='form-control w-50 mb-2' {...register("component")} />
                <input placeholder='Supplier Name' className='form-control w-50 mb-2' {...register("name")} />
                <input placeholder='Company Name' className='form-control w-50 mb-2' {...register("company")} />
                <input placeholder='Price' className='form-control w-50 mb-2' type="number" {...register("price")} />
                <input placeholder='Image URL' className='form-control w-50 mb-2' type="text" {...register("img")} />
                <textarea placeholder='Description' className='form-control w-50 mb-2' {...register("about")} />
                <input className='w-25' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddItem;