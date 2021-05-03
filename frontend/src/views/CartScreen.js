import React from 'react';
import CartItem from '../components/CartItem';
import './CartScreen.css'

const CartScreen = () => {
    return (
        <div className='cartscreen'>
            <div className="cartscreen_left">
                <h2>Shoping Cart</h2>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
            <div className='cartscreen_right'>
                <div className='cartscreen_info'>
                    <p>Subtotal (0) items</p>
                    <p>$ 499,99</p>
                </div>
                    <button>Proceed To Checkout</button>
            </div>
        </div>
    )
}

export default CartScreen
