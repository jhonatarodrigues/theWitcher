import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// -- pages
import Login from '../pages/login'
import Home from '../pages/home'



export default props => (
    <Router>
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
    </Router>
)