import PropTypes from 'prop-types';
import css from './contactList.module.css';

const ContactList = ({ contacts, filter, removeContacts }) => {
  return (
    <ul className={css.contacts__list}>
      {contacts.map(data => {
        if (filter === '') {
          return (
            <li key={data.id} id={data.id} className={css.contacts__item}>
              {data.name}: {data.number}
              <button
                className={css.contacts__btn}
                type="button"
                onClick={removeContacts}
              >
                delete
              </button>
            </li>
          );
        }
        if (data.name.toLowerCase().includes(filter.toLowerCase())) {
          return (
            <li key={data.id} id={data.id} className={css.contacts__item}>
              {data.name}: {data.number}
              <button
                className={css.contacts__btn}
                type="button"
                onClick={removeContacts}
              >
                delete
              </button>
            </li>
          );
        }
        return '';
      })}
    </ul>
  );
};

ContactList.prototype = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  removeContacts: PropTypes.func,
};

export default ContactList;
