import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    // eslint-disable-next-line no-unused-vars
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length}</Link>)
                </h1>

                {/* Payment Section - delivery addres*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Line</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                {/*  Payment Section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className='payment__details'>
                        <h3>Payment Method</h3>
                        {/* Stripe magic will go in here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
