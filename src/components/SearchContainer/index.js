import React from 'react'
import PropTypes from 'prop-types'

import './SearchSnippet.sass'

const SearchContainer = ({ children }) => (
    <div className='search-container'>{children}</div>
)

SearchContainer.propTypes = {
    children: PropTypes.array
}

export default SearchContainer
