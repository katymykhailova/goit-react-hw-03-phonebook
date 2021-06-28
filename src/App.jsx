import { Component } from 'react';
import { v4 as uuid } from 'uuid';

import ContactList from './ContactList';
import ContactFormC from './ContactFormC';

import './App.css';
import initialContacts from './contacts.json';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <section>
        <h1>Phonebook</h1>
        <ContactFormC onSubmit={this.addContact}></ContactFormC>
        {/* <ContactForm onSubmit={this.addContact}></ContactForm> */}
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input type="text" name="filter" />
        </label>
        <ContactList contacts={contacts}></ContactList>
      </section>
    );
  }
}

export default App;
