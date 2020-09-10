import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch((err) => alert(err));
    };

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch((error) => alert(error.message));
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
                            onChange={(e) => setPassword(e.target.value)}
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
