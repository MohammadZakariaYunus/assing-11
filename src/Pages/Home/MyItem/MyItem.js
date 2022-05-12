import React from 'react';
import './MyItem.css';

const MyItem = () => {


    return (
        <div className='container'>
            <h1>My Item</h1>

            <div className="row">
                <div className="col-sm-4 col-md-6 mt-3">
                    <img className='img-fluid' src="https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                </div>

                <div className="col-sm-4 col-md-6 mt-3">
                    <h3>Update Your Information</h3>
                    <form>
                        <input type="email" class="form-control w-100 mb-2"></input>
                        <input type="email" class="form-control w-100 mb-2"></input>
                        <input type="email" class="form-control w-100 mb-2"></input>
                        <input type="email" class="form-control w-100 mb-2"></input>
                        <input type="email" class="form-control w-100 mb-2"></input>
                        <button className='btn btn-light w-50 '>Update</button>
                    </form>
                </div>
            </div>

        </div >
    );
};

export default MyItem;