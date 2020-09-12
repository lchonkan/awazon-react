import React from 'react';
import './Home.css';
import Product from './Product';

export default function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                {/* Carousel */}
                <section class='carousel' aria-label='Gallery'>
                    <ol class='carousel__viewport'>
                        <li id='carousel__slide1' tabindex='0' class='carousel__slide'>
                            <img
                                className='home__image'
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_es_US_1x._CB428980075_.jpg'
                                alt='banner-1'
                            />
                            <div class='carousel__snapper'>
                                <a href='#carousel__slide4' class='carousel__prev'>
                                    Go to last slide
                                </a>
                                <a href='#carousel__slide2' class='carousel__next'>
                                    Go to next slide
                                </a>
                            </div>
                        </li>
                        <li id='carousel__slide2' tabindex='0' class='carousel__slide'>
                            <img
                                className='home__image'
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg'
                                alt='banner-1'
                            />
                            <div class='carousel__snapper'></div>
                            <a href='#carousel__slide1' class='carousel__prev'>
                                Go to previous slide
                            </a>
                            <a href='#carousel__slide3' class='carousel__next'>
                                Go to next slide
                            </a>
                        </li>
                        <li id='carousel__slide3' tabindex='0' class='carousel__slide'>
                            <img
                                className='home__image'
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg'
                                alt='banner-1'
                            />
                            <div class='carousel__snapper'></div>
                            <a href='#carousel__slide2' class='carousel__prev'>
                                Go to previous slide
                            </a>
                            <a href='#carousel__slide4' class='carousel__next'>
                                Go to next slide
                            </a>
                        </li>
                        <li id='carousel__slide4' tabindex='0' class='carousel__slide'>
                            <img
                                className='home__image'
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg'
                                alt='banner-1'
                            />
                            <div class='carousel__snapper'></div>
                            <a href='#carousel__slide3' class='carousel__prev'>
                                Go to previous slide
                            </a>
                            <a href='#carousel__slide1' class='carousel__next'>
                                Go to first slide
                            </a>
                        </li>
                    </ol>
                    <aside class='carousel__navigation'>
                        <ol class='carousel__navigation-list'>
                            <li class='carousel__navigation-item'>
                                <a href='#carousel__slide1' class='carousel__navigation-button'>
                                    Go to slide 1
                                </a>
                            </li>
                            <li class='carousel__navigation-item'>
                                <a href='#carousel__slide2' class='carousel__navigation-button'>
                                    Go to slide 2
                                </a>
                            </li>
                            <li class='carousel__navigation-item'>
                                <a href='#carousel__slide3' class='carousel__navigation-button'>
                                    Go to slide 3
                                </a>
                            </li>
                            <li class='carousel__navigation-item'>
                                <a href='#carousel__slide4' class='carousel__navigation-button'>
                                    Go to slide 4
                                </a>
                            </li>
                        </ol>
                    </aside>
                </section>

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
                        id='2324321216'
                        title='AmazonBasics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display'
                        price={9.99}
                        image={
                            'https://images-na.ssl-images-amazon.com/images/I/61j17FjPhtL._AC_SL1500_.jpg'
                        }
                        rating={5}
                    />
                    <Product
                        id='494803850'
                        title='Dash Mini Maker: The Mini Waffle Maker Machine. Yes, you need one.'
                        price={59.99}
                        image={
                            'https://images-na.ssl-images-amazon.com/images/I/81Puyv5n7BL._AC_SL1500_.jpg'
                        }
                        rating={5}
                    />
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
                            id='494832203850'
                            title='
                            Peplink SUS-SOHO-T Pepwave Surf Soho MK3 Router. Concurrent Dual-Band 802.11ac Wi-Fi with 3x3 MIMO
                            .'
                            price={199.0}
                            image={
                                'https://images-na.ssl-images-amazon.com/images/I/61qhtYfn%2BfL._AC_SL1500_.jpg'
                            }
                            rating={5}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
