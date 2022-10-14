import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from './contacts/Contacts';
import Form from './form/Form';
import { Section } from './section/Section';

class App extends Component {
    state = {
        contacts: [],
    };

    formSubmitHemdler = data => {
        const newContact = { id: nanoid(), name: data.name, number: data.number };

        this.setState(prevState => {
            return { contacts: [...prevState.contacts, newContact] };
        });
    };

    render() {
        return (
            <>
                <Section title={'Phonebook'}>
                    <Form onSubmit={this.formSubmitHemdler} />
                    <Contacts contacts={this.state.contacts} />
                </Section>
            </>
        );
    }
}

export default App;
