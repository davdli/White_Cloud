import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({handleClick, isLoggedIn}) => (
  <div class="nav-container">
    <div class="logo">
      <h3>White Cloud</h3>
    </div>

    <div class="links">
      {isLoggedIn ? (
        <ul>
        <Link to="/" class="link">Music</Link>
        <Link to="/" class="link">Home</Link>
        <Link to="/" class="btn" onClick={handleClick}>LOG OUT</Link>
      </ul>
      ) : (
        <ul>
        <Link to="/" class="link">Music</Link>
        <Link to="/" class="link">Home</Link>
        <Link to="/login" class="link">Log in</Link>
        <Link to="/login" class="btn">SIGN UP</Link>
      </ul>
      )}
    </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
