import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Map from './Map';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/map">Map</Link>
                    </li>
                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/map" component={Map}>
                        <Map/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

export default App;
