import React from 'react'
import PropTypes from 'prop-types';

const Icon = ({ name }) => (
  <svg
    className={ name }>
    <use xlinkHref={ `#${ name }` }></use>
  </svg>
)

Icon.propTypes = {
	name: PropTypes.string.isRequired
}

export default Icon
