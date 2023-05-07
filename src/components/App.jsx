import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Layout } from './Style/Layout';

export class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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
      <Layout>
        <h1>PhoneBook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          handleNameChange={this.handleNameChange}
          handlePhoneChange={this.handlePhoneChange}
          handleSubmit={this.handleSubmit}
        />
        <h2>Contact List</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        {filteredContacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        ) : (
          <p>No contacts yet.</p>
        )}
      </Layout>
    );
  }
}
