import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import { productSingle } from '../../services/ProductsService';

function ProductItem() {
    const {id} = useParams();
    const[product, setProduct] = useState(null);

    useEffect(() => {
        productSingle(id)
        .then(response => {setProduct(response)})
    }, [id]);

    return(
        <div>
            <p>id : {id}</p>
            {product && <p>{product.name}</p>}
        </div>
    )
}

export default ProductItem;