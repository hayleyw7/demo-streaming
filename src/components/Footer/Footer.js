import React, { Component } from 'react';
import './Footer.css';

import facebookLogo from '../../assets/social/facebook-white.svg';
import twitterLogo from '../../assets/social/twitter-white.svg';
import instagramLogo from '../../assets/social/instagram-white.svg';

class Footer extends Component {

  render() {
    return (
      <div className='footer'>
        <section>

          <p className='footer-links'>Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</p>

          <p className='copyright'>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>

        </section>

        <section className='icon-container'>

          <img
            src={facebookLogo}
            className='social-icon'
            alt='Facebook logo'
          />

          <img
            src={twitterLogo}
            className='social-icon'
            alt='Twitter logo'
          />

          <img
            src={instagramLogo}
            className='social-icon'
            alt='Instagram logo'
          />                  

        </section>

      </div>
    )
  }
}

export default Footer;