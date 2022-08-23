import React, { useState } from 'react';
import product from '../../fakeData/fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([]);

    const cartHandler = (product) => {
        const exist = cart.find(item => item.id === product.id);
        if(exist){
            setCart(
                cart.map((x) =>
                  x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
              );
        }else {
            setCart([...cart, { ...product, qty: 1 }]);
          }
    };

    const onRemove = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.qty === 1) {
          setCart(cart.filter((x) => x.id !== product.id));
        } else {
          setCart(
            cart.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };

    return (
        <div className='shop'>
            <div className="product-section">
            {
                product.map(product => <Product product = {product} key = {product.id} cartHandler ={cartHandler}/>)
            }
            </div>
            <div className="cart-section">
                <Cart cart={cart} onRemove={onRemove}/>
            </div>
        </div>
    );
};

export default Shop;