import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className='checkout__ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg'
                    alt=''
                />
                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>

                    {/* //info this is for automatically loading stuff from the basket, disabled for styling */}
                    {basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
