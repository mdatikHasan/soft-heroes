import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Developer.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Developer = (props) => {
    // destructuring
    const { name, age, picture, category, sallary, email } = props.developer;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='displayGrid'>
            <div className='develop'>
                <div className='card-file'>
                    <Card style={{ width: '18rem', height: '31.5rem', backgroundColor: '#2b6777', color: 'white' }}>
                        <Card.Img variant="top" src={picture} style={{ width: '150px', margin: '0 auto', marginTop: '15px', height: '150px', borderRadius: '100%' }} />
                        <Card.Body style={{marginTop: '10px'}}>
                            <h3> <b>Name :</b> {name}</h3>
                            <p> <b>Category :</b> {category}</p>
                            <p> <b>Salary :</b>  {sallary}</p>
                            <p><b>Email :</b> {email}</p>
                            <p><b>Age :</b> {age}</p>
                        </Card.Body>
                        <Button onClick={() => props.handleCart(props.developer)} variant="success" style={{ color: 'white' }}> <b>{element} Add to Cart</b></Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Developer;