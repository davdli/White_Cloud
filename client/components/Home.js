import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import picture from '../../public/ludovico.png';

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
      <div className="landing-container">
          <div className="left">
            <div className="title">
              <p>THE VIRTUAL</p>
              <p>PIANO EXPERIENCE</p>
            </div>
            <p>
              Provide every person the opportunity to play the piano instantly
            </p>
            <div>
              <Link to="/guest" className="landing-btn">Get started</Link>
            </div>
          </div>
          <div className="right">
            <img src="ludovico.jpeg" />
          </div>
      </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
