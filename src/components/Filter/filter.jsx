import { useDispatch, useSelector } from 'react-redux';
import css from './filter.module.css';
import { phonebookFilterSelector } from 'redux/phonebook/selectors';
import { setFilter } from 'redux/phonebook/phonebookSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterState = useSelector(phonebookFilterSelector);

  const handleInputChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={css.phonebookFilter__label}>
      Find contacts by name
      <input
        className={css.phonebookFilter__input}
        onChange={handleInputChange}
        value={filterState}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </label>
  );
};

export default Filter;
