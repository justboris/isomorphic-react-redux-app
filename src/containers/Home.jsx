/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import Header from './layout/Header';
import Contact from './layout/Contact';
import Resume from './layout/Resume';
import Portfolio from './layout/Portfolio';

class Home extends React.Component {

  render() {
    return <div>
              <Header />
              I am switching everything to React.js. 
              <br/>Give me a few days to clean up the mess.<br/>
              <Resume />
              <br/>Cheers,
              <br/> Boris<br/>
              <Portfolio />
              <Contact />
            </div>
  }
}

export default Home;