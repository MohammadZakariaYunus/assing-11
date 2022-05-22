import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckPlane } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';

const DeliverProduct = () => {
    const { itemId } = useParams()
    console.log(itemId)
    return (
        <div>

            <FontAwesomeIcon icon={faTruckPlane} />
        </div>
    );
};

export default DeliverProduct;