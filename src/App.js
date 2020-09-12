import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import  Toolbar from './Toolbar';

//this is using the public KEY from stripe
const promise = loadStripe(
    'pk_test_51HQOOQCR9gq5myvaxAvgKTwAwkxmJnpLFi8psVZLh7iL3836rli49brYPFdUKJQTFdyApvpx7aFxVfkoEI3EdVei00sDeOsv0K'
);

function App() {
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();

    //will only run once when the app component loads
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log('The user is >>>', authUser);
            if (authUser) {
                //the user just logged in / the user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            } else {
                //the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null,
                });
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // BEM
        <Router>
            <div className='App'>
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>

                    <Route path='/orders'>
                        <Header />
                        <Orders />
                    </Route>

                    <Route path='/payment'>
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>

                    <Route path='/checkout'>
                        <Header />
                        <Checkout />
                    </Route>
                    {/* This is the default route. Always make sure is on the bottom */}
                    <Route path='/'>
                        <Header />
                        <Toolbar />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
