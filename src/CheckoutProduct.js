import React from 'react';

function CheckoutProduct({ id, image, title, price, rating }) {
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt='' />
            <div className='checkProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__title'>{title}</p>
            </div>
        </div>
    );
}

export default CheckoutProduct;
