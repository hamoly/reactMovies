import React from 'react';
import Search from '../search';
import Logo from '../logo';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const {query, value} = props
    return (
<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">
  <Logo className="d-inline-block" alt="React Movies" />
  <span className="pl-2">React Movies</span>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Browse Movies</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/liked">Liked Movies</NavLink>
      </li>
    </ul>
    <Search query={query} value={value} /> 
  </div>
</nav>
    )
}

export default Navbar;