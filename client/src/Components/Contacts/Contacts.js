import React, { useContext } from 'react';
import ContactContext from '../../Context/contact/ContactContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';

const Contacts = () => {
  const context = useContext(ContactContext);

  const { contacts, filtered } = context;

  if (contacts.length === 0) return <h4>Please add a contact</h4>;

  return (
    <TransitionGroup>
      {filtered !== null
        ? filtered.map((contact) => (
            <CSSTransition key={contact.id} timeout={500} classNames='item'>
              <ContactItem contact={contact} />
            </CSSTransition>
          ))
        : contacts.map((contact) => (
            <CSSTransition key={contact.id} timeout={500} classNames='item'>
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
    </TransitionGroup>
  );
};

export default Contacts;
