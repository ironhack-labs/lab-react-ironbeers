import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {productList} from './../../services/ProductsService';

const AllProducts = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        productList()
        .then(response => {setList(response)})
    }, [])

    return(
        <div>
            {list.map(product => {
                return (
                    <div key={product._id}>
                        <Link to={`/products/${product._id}`}>
                            {product.name}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default AllProducts;