/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import Header from './layout/Header';
import Contact from './layout/Contact';
import Resume from './layout/Resume';
import Portfolio from './layout/Portfolio';

import styles from './App.css';
import portfolio from './styles/Portfolio.css';


class Home extends React.Component {

  render() {
    return <div className={styles.app}>
              <Header />
              <div>
              I am learning React.js as I am rebuilding my personal site.
              <br/>Give me a few days to clean up the mess.<br/>
              </div>
              <Resume />
              <br/>Cheers,
              <br/> Boris<br/>
              <Portfolio />
              <Contact />
            </div>
  }
}

export default Home;