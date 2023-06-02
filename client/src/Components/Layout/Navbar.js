import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/auth/AuthContext';
import ContactContext from '../../Context/contact/ContactContext';

const Navbar = () => {
  const context = useContext(AuthContext);
  const con = useContext(ContactContext);

  const { isAuthenticated, logout, user } = context;

  const onLogout = () => {
    logout();
    con.clearContacts();
  };

  const authLinks = (
    <>
      <li>HI {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className='fas fa-id-card-alt'></i> Contact Keeper
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navbar;
