import React from 'react';
import './Home.css';

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
                    {/* Product */}
                    {/* Product */}
                </div>

                {/*second row*/}
                <div className='home__row'>
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>

                {/*final row*/}
                <div className='home__row'></div>
            </div>
        </div>
    );
}
