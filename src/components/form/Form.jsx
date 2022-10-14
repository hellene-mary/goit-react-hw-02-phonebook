import React, { Component } from 'react';
import css from './Form.module.css';

class Form extends Component {
    state = {
        name: '',
    };

    handlerChange = evt => {
        // this.setState({ name: evt.currentTarget.value });
        const { name, value } = evt.currentTarget;

        this.setState({ [name]: value });
    };

    handlerSubmit = evt => {
        evt.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({ name: '' });
    };

    render() {
        return (
            <form onSubmit={this.handlerSubmit} className={css.form}>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handlerChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <button type="submit">Add contact</button>
            </form>
        );
    }
}

export default Form;