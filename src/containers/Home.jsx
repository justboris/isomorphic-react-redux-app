/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import Header from './layout/Header';
import Contact from './layout/Contact';
import Resume from './layout/Resume';

class Home extends React.Component {

  render() {
    return <div>
              <Header />
              I am switching everything to React.js. 
              <br/>Give me a few days to clean up the messes.<br/>
              <Resume />
              <br/><br/>Cheers,
              <br/> Boris<br/>
              <Contact />
            </div>
  }
}

export default Home;