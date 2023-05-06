import React from 'react';
// import PropTypes from 'prop-types';
// import { Button } from './FeedbackOptions.styled';

const ContactForm = ({ addContact, name }) => {
  return (
    <form>
      <label>
        Name
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={name}
          onChange={addContact}
        />
      </label>
      <button type="button">Add Contacts</button>
    </form>
  );
};

export default ContactForm;
