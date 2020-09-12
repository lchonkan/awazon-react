import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import { PostAdd } from '@material-ui/icons';

function Payment() {
    // This is for the checkout page
    const history = useHistory();

    // eslint-disable-next-line no-unused-vars
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [processing, setprocessing] = useState();
    const [succeeded, setsucceeded] = useState();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState();

    useEffect(() => {
        //generate the special stripe secret

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${parseInt(+addTotal(basket) * 100)}`,
            });

            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    console.log('THE SECRET IS >>>>> ', clientSecret);

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff
        event.preventDefault();
        setprocessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                //paymentIntent = payment confirmation
                setsucceeded(true);
                setError(null);
                setprocessing(false);
                history.replace('/orders');
            });
    };

    const handleChange = (e) => {
        //$ listens for changes in the card element and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    };

    //TODO Refactor this code and extract it as an export in the reducer module
    function addTotal(basket) {
        let total = 0;
        basket.forEach((element) => {
            const priceValue = parseFloat(element.price);
            total += priceValue;
        });
        return total;
    }

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
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3> Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={addTotal(basket)} // Part of the homework
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disable={processing || disabled || succeeded}>
                                    <span>{processing ? 'processing' : 'Buy now'}</span>
                                </button>
                            </div>
                            {/* Error handling */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
