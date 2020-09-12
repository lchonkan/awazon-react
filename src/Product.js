import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating, hideButton }) {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();

    //console.log('this is the basket >>>', basket);

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    // This piece of code is to break down the price for proper styling
    const priceComponents = price.toString().split('.');
    const dollars = priceComponents[0];
    const cents = priceComponents[1];

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <sup>$</sup>
                    <strong>{dollars}</strong>
                    <sup>{cents}</sup>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon className='star'></StarIcon>
                        ))}
                </div>
            </div>
            <img src={image} alt='' />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;
