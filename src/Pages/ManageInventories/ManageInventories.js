import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faTruckPlane } from '@fortawesome/free-solid-svg-icons'
import useInventory from '../../hooks/useProducts';


const ManageInventories = () => {
    const [inventory, setInventory] = useInventory();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }

    const handleDeleteId = id => {
        const proceed = window.confirm('Are You Sure Delete Item?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = inventory.filter(item => item._id !== id);
                    setInventory(remaining);
                })
        }
    }

    // const [deliver, setDeliver] = useState([]);

    // // load data
    // useEffect(() => {
    //     fetch('http://localhost:5000/')
    //         .then(res => res.json())
    //         .then(data => setDeliver(data));
    // }, [])

    const handleDeliverId = () => {


    }

    const navigate = useNavigate();
    const navigateAddItem = event => {
        navigate('/addItem');
    }


    // const handleUpdate = event => {
    //     event.preventDefault();
    //     const quantity = event.target.quantity.value;
    //     const updatedQuantity = { quantity };

    //     // send data to the server
    //     const url = `http://localhost:5000/product/${id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedQuantity)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('success', data);
    //             alert('Updated Quantity successfully!!!');
    //             event.target.reset();
    //         })
    // }



    return (
        <div className='container'>
            <h2 className='mt-5'>Product List</h2>
            <div className='d-flex justify-content-between'>
                <p className='text-muted mt-2 mb-5' >The product list effectively dictates product presentation and provides space
                    <br />
                    to list your products and offering in the most appealing way.</p>

                <button onClick={navigateAddItem} className='btn btn-light'>
                    <Nav.Link as={Link} to="/addItem">Add New Item</Nav.Link>
                </button>
            </div>

            <table className="table table-hover"  >
                <thead>
                    <tr className=''>
                        <th scope="col">Product</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Price</th>
                        <th scope="col">Company</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                {
                    inventory.map(item =>
                        <tbody>
                            <tr key={item._id}>
                                <th>{item.component}</th>
                                <td>{item.name}</td>
                                <td>{item.price} $</td>
                                <td>{item.company}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button onClick={() => handleDeliverId(item._id)} className='btn btn-danger'>
                                        <FontAwesomeIcon icon={faTruckPlane} />
                                    </button>
                                    <button onClick={() => navigateToItemDetail(item._id)} className='btn btn-success m-1'>
                                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                    </button>
                                    <button onClick={() => handleDeleteId(item._id)} className='btn btn-danger'>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        </div >
    );
};

export default ManageInventories;