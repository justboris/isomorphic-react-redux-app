import React, { Component } from 'react';

import Test from '../images/test-1.jpg'


function Blog(props) {

  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <img src={post.portfolio} />
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!', portfolio: require('../images/pf-create.jpg')},
  {id: 2, title: 'Installation', content: 'You can install React from npm.', portfolio: require('../images/test-1.jpg')}
];




class Portfolio extends Component {

  render() {
    return (
      <section className="blog">
        <Blog posts={posts} />
      </section>
    );
  }
}

export default Portfolio;