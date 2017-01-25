/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import Header from './layout/Header';
import Contact from './layout/Contact';
import styles from './App.css';


class About extends React.Component {

  render() {
    return <div className={styles.app}>
              <Header />
              This is the about page.<br/>
              <br/>Cheers,
              <br/> Boris<br/>
              <Contact />
            </div>
  }
}

export default About;