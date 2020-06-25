import React from 'react';
import Search from '../search';
import Logo from '../logo';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const {liked, query, search, user, handleLogOut} = props
    return (
<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">
  <Logo className="navLogo d-inline-block" alt="React Movies" />
  <span className="pl-2">React Movies</span>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/">Browse Movies</NavLink>
      </li>
      {user ?
          <>
          <li className="nav-item">
          <NavLink className="nav-link" to="/liked">Liked Movies<span className="badge badge-danger ml-2">{liked ? liked.length : '0'}</span></NavLink>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/" display="movies" onClick={handleLogOut}>Logout</Link>
          </li>
          </>
          :
          <>
          <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
          </li>
          </>
        }
    </ul>
    <Search query={query} search={search} /> 
  </div>
</nav>
    )
}

export default Navbar;