import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <h1>My Header</h1>
      <Link to="/posts">Posts</Link>
    </header>
  )
}

export default Header
