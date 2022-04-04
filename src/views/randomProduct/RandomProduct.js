import React, {useState, useEffect} from 'react';
import {productRandom} from '../../services/ProductsService';

function RandomProduct() {
    const [randomProduct, setRandomProduct] = useState();

    useEffect(() => {
        productRandom()
        .then(response => {setRandomProduct(response)})
    });

    return (
        <div>
            <pre>{JSON.stringify(randomProduct)}</pre>
        </div>
    )
}

export default RandomProduct;