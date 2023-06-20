import PropTypes from 'prop-types';
import css from './contactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { decrementAction, incrementAction } from 'redux/counter/actons';
import { counterSelector } from 'redux/counter/selectors';
import { decrement, increment } from 'redux/counter/counterSlice';

const ContactForm = ({ formSubmit }) => {
  const state = useSelector(counterSelector);
  const dispatch = useDispatch();
  console.log('CL in form: ', state);

  const handleIncrement = () => {
    dispatch(increment(1));
  };
  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  return (
    <form className={css.phonebookForm} onSubmit={formSubmit}>
      <label className={css.phonebookForm__label}>
        Name
        <input
          className={css.phonebookForm__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.phonebookForm__label}>
        Number
        <input
          className={css.phonebookForm__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.phonebookForm__btn} type="submit">
        Add contact
      </button>
      <button
        onClick={handleIncrement}
        className={css.phonebookForm__btn}
        type="button"
      >
        +
      </button>
      <div>{state.total}</div>
      <button
        onClick={handleDecrement}
        className={css.phonebookForm__btn}
        type="button"
      >
        -
      </button>
    </form>
  );
};

ContactForm.prototype = {
  formSubmit: PropTypes.func,
};

export default ContactForm;
