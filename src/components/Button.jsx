import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {};

export default Button;
