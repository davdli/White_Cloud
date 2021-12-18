import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="nav-container">
    <div className="logo">
      <Link to="/">
        <h3>White Cloud</h3>
      </Link>
    </div>

    <div className="links">
      {isLoggedIn ? (
        <ul>
        <Link to="/songs" className="link">Songs</Link>
        <Link to="/" className="link">Home</Link>
        <Link to="/" className="btn" onClick={handleClick}>LOG OUT</Link>
      </ul>
      ) : (
        <ul>
        <Link to="/songs" className="link">Songs</Link>
        <Link to="/" className="link">Home</Link>
        <Link to="/login" className="link">Log in</Link>
        <Link to="/login" className="btn">SIGN UP</Link>
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
