import React from 'react';

// Header component
const Header = ({ message }) => {
  return (
    <h2 className="Header text-center">
    {message}
    </h2>
  );
};
  
// Prop type validation
Header.propTypes = {
  message: React.PropTypes.string
};

// Default message
Header.defaultProps = {
  message: 'Hello React Component default value!!'
};

export default Header;
