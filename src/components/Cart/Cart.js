import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import './Cart.css'

const Cart = (props) => {
    const {cart, onRemove} = props;
    //console.log(cart);
    return (
        <div>
            <div className="cart-header">Cart Items</div>
            {cart.length === 0 && <div>Cart is empty</div>}
            {
                cart.map(item => (
                    <div key={item.id} className = 'cart-item'>
                        <div className="item-img">
                        <img src={item.img} alt=""/>
                        </div>
                        <div className='item-name'>
                            {item.name}
                        </div>
                        <div className='item-price'>
                            ${item.price}
                        </div>
                        <button onClick={() => onRemove(item)} className="delete-icon">
                        <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                ))
            }
            <Button variant="success">Choose 1 for me</Button>
            <br />
            <br />
            <Button variant="danger">Choose Again</Button>
        </div>
    );
};

export default Cart;