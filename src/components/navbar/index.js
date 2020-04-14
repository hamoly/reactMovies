import React from 'react';
import Search from '../search';
import Logo from '../logo';
//import { Link } from 'react-router';

const Navbar = (props) => {
  const {query, value} = props
    return (
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
 {/*<Link class="navbar-brand" to="/">*/}
  <Logo className="d-inline-block" alt="React Movies" />
  <span className="pl-2">React Movies</span>
  {/*</Link>*/}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto">
      <li class="nav-item active">
        {/*<Link class="nav-link" to="#">Browse Movies <span class="sr-only">(current)</span></Link>*/}
      </li>
      <li class="nav-item">
        {/*<Link class="nav-link" to="/login">Login</Link>*/}
      </li>
    </ul>
    <Search query={query} value={value} /> 
  </div>
</nav>
    )
}
export default Navbar;