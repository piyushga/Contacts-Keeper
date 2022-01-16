import React, { useReducer } from 'react';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  GET_CONTACTS,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  return (
    <ContactContext.Provider
      value={{
        state,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
