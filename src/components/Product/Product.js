import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {product, cartHandler} = props;
    return (
        <div className='product'>
            <img src={product.img} alt="" />
            <div className="product-name">
                <h2>Name: {product.name}</h2>
            </div>
            <div className="product-price">
                <p>Price: <strong>${product.price}</strong></p>
            </div>
            <button className="add-button" onClick={() => cartHandler(product)}>Add to Cart <span><FontAwesomeIcon icon={faCartPlus} /></span> </button>
        </div>
    );
};

export default Product;