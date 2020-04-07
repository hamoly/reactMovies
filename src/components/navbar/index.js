import React from 'react';
import Search from '../search';
import Logo from '../logo';

const Navbar = ({inputValue, handleChangeValue}) => {
    return (
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" to="/">
  <Logo className="d-inline-block" alt="React Movies" />
  <span className="pl-2">React Movies</span>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto">
      <li class="nav-item active">
        <a class="nav-link" to="#">Browse Movies <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" to="/login">Login</a>
      </li>
    </ul>
    <Search searchInput={inputValue} callBack={handleChangeValue} />
    
  </div>
</nav>
    )
}
export default Navbar;