import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        //Todo some fancy firebase shiiiiiiiiiiiiiiit
    };

    const register = (e) => {
        e.preventDefault();
        //Todo resgister logic (firebase)
    };

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
                        <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <h5>Password</h5>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setEmail(e.target.password)}
                        />
                        <button onClick={signIn} className='login__signInButton'>
                            Continue
                        </button>
                    </form>
                    <p>
                        By continuing, you agree to Awazon's Fake Conditions of Use and Privacy
                        Notice.
                    </p>
                </div>

                <div className='login__containerBreak'>
                    <div className='login__containerBreakLine'>
                        <h5>New to Awazon?</h5>
                    </div>

                    <button onClick={register} className='login__registerButton'>
                        Create your Awazon account
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
