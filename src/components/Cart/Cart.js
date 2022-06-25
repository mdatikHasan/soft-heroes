import React from 'react';
import './Cart.css';
import Button from 'react-bootstrap/Button';

const Cart = (props) => {

    const { cart } = props;

    let total = 0;
    let nam = [];
    for (const developer of cart) {

        total = total + developer.sallary
        const nameDev = developer.name;
        nam = nam + ' ' + nameDev + ', ';
        // console.log(nam)
    }
    // console.log(nam)
    return (
        <div className='cart'>
            <h2><span>Developers Added:</span> {props.cart.length}</h2>
            <h3><span>Total :</span> ${total}</h3>
            <h4><span>Selected Name :</span>  {nam} </h4>
            <div className='cart-btn'>
                <Button variant="success" style={{ color: 'white', marginTop: '10px', padding: '8px 25px'}}> <b>Hire Now !</b></Button>
            </div>
        </div>
    );
};

export default Cart;