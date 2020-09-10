import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    // This piece of code is to break down the price for proper styling
    const priceComponents = price.toString().split('.');
    const dollars = priceComponents[0];
    const cents = priceComponents[1];

    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from the Basket
        dispatch({ type: 'REMOVE_FROM_BASKET', id: id });
    };

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt='' />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <sup>$</sup>
                    <strong>{dollars}</strong>
                    <sup>{cents}</sup>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array({ rating })
                        .fill()
                        .map((_, i) => (
                            <StarIcon className='star'></StarIcon>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
