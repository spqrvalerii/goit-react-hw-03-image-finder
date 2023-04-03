import { Component } from 'react';
import propTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    title: propTypes.string,
    onClose: propTypes.func.isRequired,
    currentImageUrl: propTypes.string,
    currentImageDescription: propTypes.string,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { currentImageUrl, currentImageDescription } = this.props;

    return (
      <>
        <div className={css.backdrop} onClick={this.handleClickBackdrop}>
          <div className={css.modal}>
            <img
              src={currentImageUrl}
              alt={currentImageDescription}
              className={css.img}
            />
          </div>
        </div>,            
      </>
    );
  }
}

export { Modal };