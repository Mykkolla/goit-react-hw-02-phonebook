import React from 'react';
// import PropTypes from 'prop-types';
// import { Button } from './FeedbackOptions.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.number}
          <button type="button" onClick={() => onDelete(contact.id)}>
            Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
