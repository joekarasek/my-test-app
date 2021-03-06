import React from 'react';
import PropTypes from 'prop-types';

function Button({ text }) {
  return (
    <button type="submit">
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
