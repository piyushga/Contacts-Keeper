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
import AuthState from './context/auth/AuthState';
import AlertState from './Context/alert/AlertState';

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
                  <Route exact path='/' component={Home} />
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
