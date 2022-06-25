import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Shop.css';

const Shop = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./Fakedata.json')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, []);

    const handleCart = (developer) => {
        const newCart = [...cart, developer];
        setCart(newCart)
    }
    return (
        <div className='shop'>
            <div className='developers'>
                {
                    developers.map(developer => <Developer handleCart={handleCart} key={developer.email}   developer={developer}></Developer>)
                }
            </div>
            <div className='cart'>
                {<Cart cart={cart}></Cart>}
            </div>
        </div>
    );
};

export default Shop;