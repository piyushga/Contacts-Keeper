import React, { useContext } from 'react';
import ContactContext from '../../Context/contact/ContactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const context = useContext(ContactContext);

  const { contacts } = context;

  return (
    <div>
      {contacts !== null
        ? contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : ''}
    </div>
  );
};

export default Contacts;
