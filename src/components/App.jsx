import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import Statistics from './Statistics/Statistics';
// import ContactForm from './InputPhone/InputPhone';
// import Section from './Section/Section';
// import Notification from './NotificationMessage/NotificationMessage';

export class PhoneBook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handlePhoneChange = event => {
    this.setState({
      number: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handlePhoneChange}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
        <h2>Contact List</h2>
        {this.state.contacts.length > 0 ? (
          <ul>
            {this.state.contacts.map(contact => (
              <li key={contact.id}>
                {contact.name}
                {contact.number}
              </li>
            ))}
          </ul>
        ) : (
          <p>No contacts yet.</p>
        )}
      </div>
    );
  }
}

// {
/* <ContactForm onAddContact={this.addContact} value={name} />; */
// }
