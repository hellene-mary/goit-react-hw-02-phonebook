import css from './ContactList.module.css';

export function ContactList({ contacts }) {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id} className={css.contact}>
                    {contact.name}: {contact.number}
                </li>
            ))}
        </ul>
    );
}
