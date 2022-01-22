import React, { useRef, useContext, useEffect } from 'react';
import ContactContext from '../../Context/contact/ContactContext';

const ContactFilter = () => {
  const context = useContext(ContactContext);
  const text = useRef('');

  useEffect(() => {
    if (context.filtered === null) text.current.value = '';
  }, []);

  const onChange = (e) => {
    if (text.current.value !== '') context.filterContact(e.target.value);
    else context.clearFilter();
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter contacts...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
