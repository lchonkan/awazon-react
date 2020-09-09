import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();

    function addTotal(basket) {
        let total = 0;
        basket.forEach((element) => {
            const priceValue = parseFloat(element.price);
            total += priceValue;
        });
        return total;
    }

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
                            Subtotal ({basket.length} items):
                            <strong> {value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={addTotal(basket)} // Part of the homework
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
