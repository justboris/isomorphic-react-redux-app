/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import Header from './layout/Header';
import Contact from './layout/Contact';
import Resume from './layout/Resume';
import Portfolio from './layout/Portfolio';

import styles from './App.css';
import portfolio from './styles/Portfolio.css';


class Testing extends React.Component {

  render() {
    return <div className={styles.app} row>
              <Header />
              <div className="col-md-3">
              This is testing
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

export default Testing;