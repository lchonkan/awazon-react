import React from 'react';
import './Home.css';
import Product from './Product';

export default function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_es_US_1x._CB428980075_.jpg'
                    alt='banner-1'
                />

                {/*first row*/}
                <div className='home__row'>
                    <Product
                        id='4903850'
                        title='Samsung LC27F398FWNXZA Samsung C27F398 27 Inch Curved LED Monitor'
                        price={189.99}
                        image={'https://m.media-amazon.com/images/I/91SZVWfPjdL._AC_UY218_.jpg'}
                        rating={5}
                    />
                    <Product
                        id='494803850'
                        title='Top Race Giant 6 Foot Inflatable Beach Bal | 1 Giant Jumbo Blow up Rainbow Color Beach Balls, 72 Inches Tall'
                        price={29.99}
                        image={
                            'https://images-na.ssl-images-amazon.com/images/I/51%2BXtzwdryL._AC_SL1224_.jpg'
                        }
                        rating={5}
                    />
                    <Product
                        id='23243246'
                        title='Dash Mini Maker: The Mini Waffle Maker Machine. Yes, you need one.'
                        price={59.99}
                        image={
                            'https://images-na.ssl-images-amazon.com/images/I/81Puyv5n7BL._AC_SL1500_.jpg'
                        }
                        rating={5}
                    />
                </div>

                {/*second row*/}
                <div className='home__row'>
                    <Product
                        id='494803850'
                        title='Dash Mini Maker: The Mini Waffle Maker Machine. Yes, you need one.'
                        price={59.99}
                        image={
                            'https://images-na.ssl-images-amazon.com/images/I/81Puyv5n7BL._AC_SL1500_.jpg'
                        }
                        rating={5}
                    />
                </div>

                {/*final row*/}
                <div className='home__row'>
                    <div className='home__row'>
                        <Product
                            id='494803850'
                            title='Dash Mini Maker: The Mini Waffle Maker Machine. Yes, you need one.'
                            price={59.99}
                            image={
                                'https://images-na.ssl-images-amazon.com/images/I/81Puyv5n7BL._AC_SL1500_.jpg'
                            }
                            rating={5}
                        />
                    </div>
                    <div className='home__row'>
                        <Product
                            id='494803850'
                            title='Dash Mini Maker: The Mini Waffle Maker Machine. Yes, you need one.'
                            price={59.99}
                            image={
                                'https://images-na.ssl-images-amazon.com/images/I/81Puyv5n7BL._AC_SL1500_.jpg'
                            }
                            rating={5}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
