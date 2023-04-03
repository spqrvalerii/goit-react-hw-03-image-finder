import propTypes from 'prop-types';
import { Slide, toast } from 'react-toastify';

const Toastify = (type, nameToastify) =>
  toast(nameToastify, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    transition: Slide,
    type: type,
  });

Toastify.propTypes = {
  type: propTypes.string.isRequired,
  nameToastify: propTypes.string.isRequired,
};

export { Toastify };