import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Home, About, PageNotFound, PrivateRoute, Account, Contact } from './components';
import { ContactModel } from './Contacts';
import { ContactComponent } from './ContactComponent';

export class Main extends Component {
    render() {
        const isAuth = localStorage.getItem('token');
        return (
            <Router>
                <div>
                    <ul>
                        <li><NavLink to="/" activeStyle={{ fontWeight: 'bold' }} exact>Home</NavLink></li>
                        <li><NavLink to="/about" activeStyle={{ fontWeight: 'bold' }}>About</NavLink></li>
                        <li><NavLink to="/account" activeStyle={{ fontWeight: 'bold' }}>Account</NavLink></li>
                        { ContactModel.contacts.map(contact => <li key={contact._id}><NavLink to={'/contact/' + contact._id}>{contact.name}</NavLink></li>) }
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact/:id" component={ContactComponent} />
                        <PrivateRoute path="/account" component={Account} isAuth={isAuth} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

// https://reacttraining.com/react-router/
