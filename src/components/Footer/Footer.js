import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div className='footer'>

        <h1>test</h1>
        <button
          className='log-in-btn'
          alt='Log in Button'
        >
          Home
        </button>

        <button
          className='free-trial-btn'
          alt='Free Trial Button'
        >
          Start your free trial
        </button>        

      </div>
    )
  }
}

export default Footer;