/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import Header from './layout/Header';
import Contact from './layout/Contact';
import Notwork from './layout/Notwork';
import styles from './styles/About.css';


class About extends React.Component {

  render() {
    return <div className={styles.about}>
              <Header />
              <p>"The future of front-end development is design" - that is something i wholeheartly agree since I look at front end development as a tool to further express the thought and tone of an idea. Front end development, in my humble opnin</p><br/>
              <br/>Cheers,
              <br/> Boris<br/>
              <div className={styles.notWork}>
                <Notwork />
              </div>
              <Contact />
            </div>
  }
}

export default About;