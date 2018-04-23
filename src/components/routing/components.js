import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

export const Home = () => (
    <div>
        Home Component
    </div>
);

export const About = () => (
    <div>
        About Component
    </div>
);

export const PageNotFound = () => (
    <div>
        404 Page Not Found!
    </div>
);

export const Account = () => (
    <div>
        <p>Email: teo@gmail.com</p>
        <p>Name: Teo Nguyen</p>
    </div>
)

export const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
    <Route
        {...rest}
        render={props => isAuth ? <Component {...props} /> : <Redirect to="" />}
    />
);
