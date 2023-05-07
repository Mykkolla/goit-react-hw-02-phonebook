import React from 'react';
// import PropTypes from 'prop-types';
import { AddContactBtn } from '../../components/Style/AddContact.styled.js';
import { FcContacts } from 'react-icons/fc';

const ContactForm = ({
  name,
  number,
  handleNameChange,
  handlePhoneChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handlePhoneChange}
        />
      </label>
      <AddContactBtn type="submit">
        <FcContacts />
        Add Contact
      </AddContactBtn>
    </form>
  );
};

export default ContactForm;
