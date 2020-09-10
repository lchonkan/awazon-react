import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-500x200.png'
                    alt=''
                />
            </Link>

            <div className='top_container'>
                <div className='login__container'>
                    <h1>Sign-in</h1>
                    <form action=''>
                        <h5>Email (phone for mobile accounts)</h5>
                        <input type='text' />
                        <h5>Password</h5>
                        <input type='password' />
                        <button className='login__signInButton'>Continue</button>
                    </form>
                    <p>
                        By continuing, you agree to Awazon FAKE CLONE Conditions of Use and Privacy
                        Notice.
                    </p>
                </div>

                <div className='login__containerBreak'>
                    <div className='login__containerBreakLine'>
                        <h5>New to Awazon?</h5>
                    </div>

                    <button className='login__registerButton'>Create your Awazon account</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
