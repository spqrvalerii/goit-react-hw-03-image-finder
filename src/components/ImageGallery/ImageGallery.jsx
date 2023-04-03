import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';
import css from './ImageGallery.module.css';

function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, description, smallImage, largeImage }) => (
        <ImageGalleryItem
          key={id}
          description={description}
          smallImage={smallImage}
          largeImage={largeImage}
          openModal={openModal}
        />
      ))}
    </ul>   
  );
}

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      description: propTypes.string,
      smallImage: propTypes.string.isRequired,
      largeImage: propTypes.string.isRequired,
    })
  ).isRequired,
};

export { ImageGallery };