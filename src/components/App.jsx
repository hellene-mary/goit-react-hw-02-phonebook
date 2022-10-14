import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from './contacts/Contacts';
import Form from './form/Form';
import { Section } from './section/Section';
import { Filter } from './filter/Filter';

class App extends Component {
    state = {
        filter: '',
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
    };

    formSubmitHemdler = data => {
        const newContact = { id: nanoid(), name: data.name, number: data.number };

        this.setState(prevState => {
            return { contacts: [...prevState.contacts, newContact] };
        });
    };

    handlerChangeFilter = evt => {
        // this.setState({ name: evt.currentTarget.value });
        const { name, value } = evt.currentTarget;

        this.setState({ [name]: value.toLowerCase() });
    };

    filterContacts = () => {
        return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter));
        // console.log('~ filterContact', filterContact);
    };

    render() {
        const filterContacts = this.filterContacts();

        return (
            <>
                <Section title={'Phonebook'}>
                    <Form onSubmit={this.formSubmitHemdler} />
                    <Filter onChange={this.handlerChangeFilter} />
                    <Contacts contacts={filterContacts} />
                </Section>
            </>
        );
    }
}

export default App;
