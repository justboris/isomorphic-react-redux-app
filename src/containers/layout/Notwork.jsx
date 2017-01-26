import React, { Component } from 'react';

import portfolio from '../styles/Portfolio.css';

import Button from 'react-bootstrap/lib/Button';

function Poster(props) {

  const content = props.posts.map((post) =>
    <div style={portfolioItem} key={post.id}>
        <img style={portfolioImage} src={post.poster} />
    </div>
  );
  return (
    <div style={portfolioFlex} className="flex-notwork">
      {content}
    </div>
  );
}

const portfolioItem = {
    'display': 'block',
    'border': '1px solid #e3e3e3',
    'flex': '1 1 auto',
    'width': '300px',
    'margin': '10px'
};

const portfolioFlex = {
    'display': 'flex',
    'flex-wrap': 'wrap'
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
    'display': 'block',
    'width': '100%'
};


const posts = [
  {id: 1, subtitle:'Poster 1', description:'', poster: require('../images/poster-knocknock.jpg')},
  {id: 2, subtitle:'Poster 2', description:'', poster: require('../images/poster-knocknock2.jpg')},
  {id: 3, subtitle:'Poster 3', description:'', poster: require('../images/poster-knocknock3.jpg')},
  {id: 4, subtitle:'Poster 4', description:'', poster: require('../images/poster-mashaamaker2.jpg')},
  {id: 5, subtitle:'Poster 5', description:'', poster: require('../images/poster-mashaamaker3.jpg')},
  {id: 6, subtitle:'Poster 6', description:'', poster: require('../images/poster-mashaamaker4.jpg')},
  {id: 7, subtitle:'Poster 7', description:'', poster: require('../images/poster-mashaamaker5.jpg')},
  {id: 8, subtitle:'Poster 8', description:'', poster: require('../images/poster-bigmouth.jpg')},
  {id: 9, subtitle:'Poster 9', description:'', poster: require('../images/poster-crabbydinner.jpg')},
  {id: 10, subtitle:'Poster 10', description:'', poster: require('../images/poster-dontkill.jpg')},
  {id: 11, subtitle:'Poster 11', description:'', oster: require('../images/poster-haiti.jpg')},
  {id: 12, subtitle:'Poster 12', description:'', poster: require('../images/poster-halloweenparty.jpg')},
  {id: 13, subtitle:'Poster 13', description:'', poster: require('../images/poster-Ithoughtwewerebestfriend.jpg')},
  {id: 14, subtitle:'Poster 14', description:'', poster: require('../images/poster-Ithoughtwewerebestfriend2.jpg')},
  {id: 15, subtitle:'Poster 15', description:'', poster: require('../images/poster-journalist.jpg')},
  {id: 16, subtitle:'Poster 16', description:'', poster: require('../images/poster-movieposter.jpg')},
  {id: 17, subtitle:'Poster 17', description:'', poster: require('../images/poster-strikeback_fur.jpg')},
  {id: 18, subtitle:'Poster 18', description:'', poster: require('../images/poster-tributethecolonal.jpg')},
  {id: 19, subtitle:'Poster 19', description:'', poster: require('../images/poster-valentinesDay.jpg')},
  {id: 20, subtitle:'Poster 20', description:'', poster: require('../images/poster-thinkoutsideoffun.jpg')},
  {id: 21, subtitle:'Poster 21', description:'', poster: require('../images/poster-whitney2.jpg')}
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