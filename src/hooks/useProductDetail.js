import { useEffect, useState } from "react"

const useProductDetail = itemId => {
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${itemId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [itemId]);
    return [inventory]
}



export default useProductDetail;