import React from 'react';
import './App.css';
import twitterLogo from './assets/twitter-logo.svg';

// Constants
const TWITTER_HANDLE = 'djembeleza';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🍭 Candy Drop</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <p
            className="footer-text"><small>Built by<a
              href={TWITTER_LINK}
              target="_blank"
              rel="noreferrer"
            >{` @${TWITTER_HANDLE}`}</a></small></p>
        </div>
      </div>
    </div>
  );
};

export default App;
