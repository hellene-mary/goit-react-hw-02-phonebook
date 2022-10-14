import css from './Section.module.css';

export function Section({ title, children }) {
    return (
        <section>
            <h1 className={css.sectionTitle}>{title}</h1>
            {children}
        </section>
    );
}
