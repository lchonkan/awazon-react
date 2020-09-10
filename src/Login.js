import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Link to='/'>
            <div className='login'>
                <img
                    src='https://turnerduckworth.com/sites/default/files/styles/case_study_single_image/public/2019-03/AZN_logo.jpg?h=a92f03cd&itok=AjcRaJtK'
                    alt=''
                />
            </div>
        </Link>
    );
}

export default Login;
