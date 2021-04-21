import React from 'react';
import Product from '../components/Product';
import './HomeScreen.css';

const HomeScreen = () => {
    return (
        <div className='homescreen'>
            <h2 className="homescreen_title">Lastest Products</h2>
            <div className="homescreen_products">
               <Product/>
            </div>
        </div>
    )
}

export default HomeScreen
