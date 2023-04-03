import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ description, smallImage, largeImage, openModal }) {
  return (
    <li className={css.item} onClick={openModal}>
      <img src={smallImage} alt={description} data-large={largeImage} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  description: propTypes.string,
  smallImage: propTypes.string.isRequired,
  largeImage: propTypes.string.isRequired,
  openModal: propTypes.func.isRequired,
};

export { ImageGalleryItem };