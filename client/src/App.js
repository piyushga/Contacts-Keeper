import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Alerts from './Components/Layout/Alerts';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import ContactState from './Context/contact/ContactState';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import AuthState from './Context/auth/AuthState';
import AlertState from './Context/alert/AlertState';
import SetAuthToken from './utils/SetAuthToken';
import PrivateRoute from './Components/routing/PrivateRoute';

if (localStorage.token) {
  SetAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
