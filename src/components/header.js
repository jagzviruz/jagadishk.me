import React from 'react'


const Header = ({ children, className='' }) => (
  <h3 className={className}>
    { children }
  </h3>
)

export default Header
