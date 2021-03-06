import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';

const Logo = ({ className }) => (
  <img alt="MyBit Logo" className={className} src={logo} />
);

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;

