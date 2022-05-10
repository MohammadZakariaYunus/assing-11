import React from 'react';
import useInventory from '../../hooks/useProducts';

const ManageInventories = () => {
    const [inventory] = useInventory();
    return (
        <div>
            <h2>Manage Your Inventories</h2>
            {
                inventory.map(item => <table className="table table-striped" key={item._id} >
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{item.component}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    </tbody>


                </table>
                )
            }
        </div >
    );
};

export default ManageInventories;