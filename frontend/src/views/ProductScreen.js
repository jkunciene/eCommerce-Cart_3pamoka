import React from 'react';
import './ProductScreen.css';

const ProductScreen = () => {
    return (
        <div className='productscreen'>
            <div className='productscreen_left'>
                <div className='left_image'>
                     <img src='https://images.unsplash.com/photo-1619687679014-d7f1ecdf2791?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='product_image'/>
                </div>
               <div className='left_info'>
                    <p className='left_name'>Product 1</p>
                    <p>Price: $499.99</p>
                    <p>Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

               </div>
            </div>

            <div className='productscreen_right'>
                <div className='right_info'>
                    <p>Price: <span>$499.99</span></p>
                    <p>Status: <span>In Stock</span></p>
                    <p>Qty
                        <select>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add To Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
