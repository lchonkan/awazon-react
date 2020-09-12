import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useStateValue } from './StateProvider';

import { getAddressFromCoordinates } from './/location';

function Toolbar() {
    const [isLocated, setisLocated] = useState(false);
    const [currentAddress, setCurrentAddress] = useState();
    const [{ basket, user }, dispatch] = useStateValue();

    function locateUserHandler() {
        // First we check if the geolocation object is available in the browser
        if (!navigator.geolocation) {
            alert(
                'Location feature is not available in your browser - please user a more modern address or manuall enter an address'
            );
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (successResult) => {
                const coordinates = {
                    lat: successResult.coords.latitude,
                    lng: successResult.coords.longitude,
                };

                const address = await getAddressFromCoordinates(coordinates);
                setCurrentAddress(address);
                console.log('Address>>', address);
                //this.selectPlace(coordinates, address);
            },
            (error) => {
                alert(
                    error,
                    'Could not locate you, unfortunately. Please enter an address manually'
                );
            }
        );
    }

    useEffect(() => {
        locateUserHandler();
    }, []);

    return (
        <div className='toolbar'>
            <div className='toolbar__deliveryAddress'>
                <LocationOnIcon className='locIcon'></LocationOnIcon>
                <div className='toolbar__option'>
                    <span className='toobar__optionLineOne'>Deliver to</span>
                    <span className='toolbar__optionLineTwo'>
                        {currentAddress || 'Location not set'}
                    </span>
                </div>
            </div>
            <div className='toolbar__links'>
                <div className='toolbar__option'>
                    <ul>
                        <li>Today's Deals</li>
                        <li>{user?.email}'s Awazon.com</li>
                        <li>Customer Services</li>
                        <li>Browsing History</li>
                        <li>Gift Cards</li>
                        <li>Registry</li>
                        <li>Sell</li>
                        <li>Buy Again</li>
                    </ul>
                </div>
            </div>
            <div className='toolbar__covidResponse'>
                <h4>Leo's response to React Challange </h4>
            </div>
        </div>
    );
}

export default Toolbar;
