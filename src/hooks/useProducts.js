import { useEffect, useState } from "react";

const useInventory = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('https://secret-reef-34877.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])
    return [inventory, setInventory]
}

export default useInventory;