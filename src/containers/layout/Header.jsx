import React, { Component } from 'react';

class Header extends React.Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" title="Home">Boris Kan</a>
			    <small>UX | Front End Developer based in DC</small>
			  </h3>
			</div>
		</div>
    );
  }
}

export default Header;