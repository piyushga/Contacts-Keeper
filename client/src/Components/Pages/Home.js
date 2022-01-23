import React, { useContext, useEffect } from 'react';
import ContactFilter from '../Contacts/ContactFilter';
import { ContactForm } from '../Contacts/ContactForm';
import Contacts from '../Contacts/Contacts';
import AuthContext from '../../Context/auth/AuthContext';

const Home = () => {
  const context = useContext(AuthContext);

  useEffect(() => {
    context.loadUser();
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
