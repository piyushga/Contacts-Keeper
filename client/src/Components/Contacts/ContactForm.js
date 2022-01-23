import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../../Context/contact/ContactContext';

const initialContact = {
  name: '',
  email: '',
  phone: '',
  type: 'personal',
};

export const ContactForm = () => {
  const context = useContext(ContactContext);

  const { current } = context;

  useEffect(() => {
    if (current !== null) setContact(current);
    else
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
  }, [context, current]);

  const [contact, setContact] = useState(initialContact);

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) context.addContact(contact);
    else context.UpdateContact(contact);

    Clear();
  };

  const Clear = (e) => {
    e.preventDefault();
    context.clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Update Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
        required
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
        required
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
        required
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={Clear}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};
