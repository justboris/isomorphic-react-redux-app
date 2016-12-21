import React, { PropTypes, Component } from 'react';


export default class Repos extends Component {
  render () {
    return (
      <div>
        
          <div className="repo-item"> 
            <a >something</a>
          </div>
      </div>
    );
  }
}

Repos.propTypes = {
  results: PropTypes.array.isRequired
};