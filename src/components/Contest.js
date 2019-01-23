import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  render () {
    return <div className='Contest'>
      {this.props.description}
    </div>;
  }
}

Contest.PropTypes = {
  description: PropTypes.string.isRequired
};

export default Contest;