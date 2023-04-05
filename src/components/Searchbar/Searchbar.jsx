import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { Toastify } from '../Toastify/Toastify';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({
      query: event.target.value.toLowerCase(),
    });
  };

  handleSubmit = event => {
    const { query } = this.state;
    event.preventDefault();
    if ((query.trim()) === '') {
      Toastify('warning', 'Enter the name of the picture or photo!');
    } else {
      this.props.onSubmit(query.trim());
      this.setState({ query: '' });
    }
  };

  render() {
    const { query } = this.state;

    return (
      <header className={css.bar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button className={css.button} type="submit">
            <ImSearch style={{ width: 18, height: 18 }} />
          </button>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export { Searchbar };