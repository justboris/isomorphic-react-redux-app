import React, { Component } from 'react';

import portfolio from '../styles/Portfolio.css';



function Poster(props) {

  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li  key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div style={portfolioItem} key={post.id}>
      <div style={portfolioTitle} >
        <h3>{post.title}</h3>
        <span >{post.subtitle}</span>
        <p>{post.tool}</p>
      </div>
      <div style={portfolioDesc}>
        <p>{post.content}</p>
      </div>
      <div style={portfolioStyle}>
        <img style={portfolioImage} src={post.poster} />
      </div>

    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}

const portfolioItem = {
    'position': 'relative',
    'padding': '25px',
    'opacity': '.9',
    'margin': '20px 0',
    'backgroundColor': 'white'
};

const portfolioTitle = {
    'width': '30%',
    'display': 'inline-block',
    'borderRight': '1px solid orange',
    'paddingRight': '1%',
    'verticalAlign': 'top'
};

const portfolioDesc = {
    'width': '67%',
    'display': 'inline-block',
    'paddingLeft': '1%',
    'verticalAlign': 'bottom'
};
const portfolioStyle = {
    'display': 'flex'
};

const portfolioImage = {
    'width': '30%',
    'height': '100%',
    'display': 'block',
    'border': '1px solid #e3e3e3',
    'margin': '2% .5% 0', 
    'flex': '1 1 auto'
};


const posts = [
  {id: 1, subtitle:'Poster 1', poster: require('../images/poster-knocknock.jpg')},
  {id: 2, subtitle:'Poster 2', poster: require('../images/poster-knocknock2.jpg')},
  {id: 3, subtitle:'Poster 3', poster: require('../images/poster-knocknock3.jpg')},
  {id: 4, subtitle:'Poster 4', poster: require('../images/poster-mashaamaker2.jpg')},
  {id: 5, subtitle:'Poster 5', poster: require('../images/poster-mashaamaker3.jpg')},
  {id: 6, subtitle:'Poster 6', poster: require('../images/poster-mashaamaker4.jpg')},
  {id: 7, subtitle:'Poster 7', poster: require('../images/poster-mashaamaker5.jpg')}
];




class Notwork extends Component {

  render() {
    return (
      <section className={portfolio.portfolioImage} >
        <Poster posts={posts} />
      </section>
    );
  }
}

export default Notwork;