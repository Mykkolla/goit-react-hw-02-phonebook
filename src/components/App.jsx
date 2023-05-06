import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import Statistics from './Statistics/Statistics';
import ContactForm from './ContactForm/ContactForm';
// import Section from './Section/Section';
// import Notification from './NotificationMessage/NotificationMessage';

export class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
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

  handleFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    const existingNames = this.state.contacts.map(contact => contact.name);
    if (existingNames.includes(newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          handleNameChange={this.handleNameChange}
          handlePhoneChange={this.handlePhoneChange}
          handleSubmit={this.handleSubmit}
        />
        <h2>Contact List</h2>
        <label>
          Filter contacts by name:
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
        </label>
        {filteredContacts.length > 0 ? (
          <ul>
            {filteredContacts.map(contact => (
              <li key={contact.id}>
                {contact.name} {contact.number}
                <button
                  type="button"
                  onClick={() => this.deleteContact(contact.id)}
                >
                  Delete Contact
                </button>
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

// return (
//   <div>
//     <h1>Phonebook</h1>
//     <ContactForm
//       name={this.state.name}
//       number={this.state.number}
//       handleNameChange={this.handleNameChange}
//       handlePhoneChange={this.handlePhoneChange}
//       handleSubmit={this.handleSubmit}
//     />
//     <h2>Contacts</h2>
//     <Filter value={this.state.filter} onChange={this.handleFilterChange} />
//     <ContactList contacts={filteredContacts} onDelete={this.deleteContact} />
//   </div>
// );
// }
// }
