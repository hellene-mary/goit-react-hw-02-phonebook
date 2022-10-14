import css from './Contacts.module.css';

export function Contacts({ contacts }) {
    return (
        <h2>
            Contasts
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id} className={css.contact}>
                        {contact.name}
                    </li>
                ))}
            </ul>
        </h2>
    );
}
