import propTypes from 'prop-types';
import css from './Button.module.css';

function Button({ onNextFetch }) {
  return (
    <button className={css.btn} type="button" onClick={onNextFetch}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onNextFetch: propTypes.func.isRequired,
};

export { Button };