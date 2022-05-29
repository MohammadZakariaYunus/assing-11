import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);
    console.log(itemId)

    const handleUpdate = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const company = event.target.company.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const about = event.target.about.value;
        const component = event.target.component.value;
        const img = event.target.component.value;
        const updatedProduct = { name, img, company, quantity, price, about, component };

        // send data to the server
        const url = `https://secret-reef-34877.herokuapp.com/product/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('users added successfully!!!');
                event.target.reset();
            })
    }

    return (
        <div>
            <div className="container">
                <h1 className='mt-5 mb-5'>Product Details</h1>
                <div className="card mt-3" >
                    <div className="row">
                        <div className="col-5">
                            <img className="card-img" src={item.img} alt="" />
                        </div>
                        <div className="col-7">
                            <div className="card-body">
                                <h4 className="card-title">{item.component}</h4>
                                <p>ID: {item._id}</p>
                                <p>Supplier: {item.name}</p>
                                <p>Price: {item.price}</p>
                                <p>Company: {item.company}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p className="card-text">{item.about}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='mt-5 mb-5'>Need Update</h1>
                <form onSubmit={handleUpdate}>
                    <input className='w-50 form-control' type="text" name="component" placeholder='Component' required /><br />
                    <input className='w-50 form-control' type="text" name="name" placeholder='Name' required /><br />
                    <input className='w-50 form-control' type="text" name="price" placeholder='price' required /><br />
                    <input className='w-50 form-control' type="text" name="company" placeholder='Company' required /><br />
                    <input className='w-50 form-control' type="text" name="quantity" placeholder='Quantity' required /><br />
                    <input placeholder='Image URL' className='form-control w-50 mb-2' type="text" name="img" /><br />
                    <textarea className='w-50 form-control' type="text" name="about" placeholder='Description' required /><br />
                    <button className='btn btn-info'>Update</button>
                </form>
            </div>

        </div>
    );
};

export default ItemDetail;