import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export function ContactList({ contacts, onClick }) {
    return (
        <ul className={css.contactsList}>
            {contacts.map(contact => (
                <li key={contact.id} className={css.contact}>
                    {contact.name}: {contact.number}
                    <button type="button" onClick={() => onClick(contact.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired,
};
