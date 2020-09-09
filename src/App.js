import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        // BEM
        <Router>
            <div className='App'>
            <Header />
                <Switch>
                    {/* This is the default route */}
                    <Route path='/checkout'>

                        <Checkout />
                    </Route>
                    {/* This is the default route. Always make sure is on the bottom */}
                    <Route path='/'>

                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
