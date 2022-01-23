import React, { useContext, useEffect } from 'react';
import ContactContext from '../../Context/contact/ContactContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import Spinner from '../Layout/Spinner';

const Contacts = () => {
  const context = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = context;

  useEffect(() => {
    getContacts();
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading)
    return <h4>Please add a contact</h4>;

  return contacts !== null && !loading ? (
    <TransitionGroup>
      {filtered !== null
        ? filtered.map((contact) => (
            <CSSTransition key={contact._id} timeout={500} classNames='item'>
              <ContactItem contact={contact} />
            </CSSTransition>
          ))
        : contacts.map((contact) => (
            <CSSTransition key={contact._id} timeout={500} classNames='item'>
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
    </TransitionGroup>
  ) : (
    <Spinner />
  );
};

export default Contacts;
