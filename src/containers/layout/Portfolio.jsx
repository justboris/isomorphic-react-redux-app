import React, { Component } from 'react';


import portfolio from '../styles/Portfolio.css';


function Blog(props) {

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
      <div class="portfolioTitle" style={portfolioTitle} >
        <h3>{post.title}</h3>
        <span >{post.subtitle}</span>
        <p>{post.tool}</p>
      </div>
      <div class="portfolioDesc" style={portfolioDesc}>
        <p>{post.content}</p>
      </div>
      <div className="pfStyle" style={portfolioStyle}>
        <img style={portfolioImage} src={post.portfolio} />
        <img style={portfolioImage} src={post.portfolio2} />
        <img style={portfolioImage} src={post.portfolio3} />
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
    'display': 'flex',
    'flexWrap': 'wrap'
};

const portfolioImage = {
};


const posts = [
  {id: 1, title: 'Create', subtitle: 'www.create.io', content: 'Focus on visual elements for a start up real estate application that enables users to compare and ctombine the value and potential of different type of properties. Further develop and design the visual framework to provide a better user experience.', tool: 'Adobe Suite, git, angular, jade, html, scss', portfolio: require('../images/pf_create.jpg'), portfolio2: require('../images/pf_create2.jpg'), portfolio3: require('../images/pf_create3.jpg')},
  {id: 2, title: 'Synpatics', subtitle: 'www.synpatics.org', content: 'Collaborated with designers, and backend developers on building internal network site for Synaptics. Focus on using the necessary modules, templating and responsive styling.', tool: 'Aqquia Dev Desktop git, LESS, Drupal 7, CSS, PHP, HTML', portfolio: require('../images/pf_synaptics.jpg'), portfolio2: require('../images/pf_synaptics2.jpg'), portfolio3: require('../images/pf_synaptics3.jpg') },
  {id: 3, title: 'Convergent Wealth', subtitle: 'www.convergentwealth.com', content: 'Design and implement additional content type and pages for existing Drupal 7 site. Provide technical support and training for user.', tool: 'Drupal 7, CSS, PHP, HTML', portfolio: require('../images/pf_convergent.jpg'), portfolio2: require('../images/pf_convergent2.jpg'), portfolio3: require('../images/pf_convergent3.jpg') },
  {id: 4, title: 'USP', subtitle: 'www.usp.org', content: 'Served as Web Communications technical lead involved in the full life cycle nof website interface development including requirements gathering, build, test, and production support. Performed high-quality assurance/control testing and code walkthroughs to ensure effective implementation of content and features.', tool: 'Drupal 76 CSS, PHP, HTML', portfolio: require('../images/pf_usp.jpg'), portfolio2: require('../images/pf_usp2.jpg'), portfolio3: require('../images/pf_usp3.jpg') },
  {id: 5, title: 'Quality Matters', subtitle: 'www.qualitymatters.usp.org', content: 'Implement Drupal 7 site for a sample blog-theme site to promote USP’s message and mission on public health. In addition, i set up  permissions for different types ofusers, created views and content types to provide better user experience for non-technical content owners.', tool: 'Drupal 7, CSS, PHP, HTML', portfolio: require('../images/pf_qm-usp.jpg'), portfolio2: require('../images/pf_qm-usp2.jpg'), portfolio3: require('../images/pf_qm-usp3.jpg') },
  {id: 6, title: 'NCCMERP', subtitle: 'www.nccmerp.org', content: 'Drupal 7 set up, drupal modules suggestions, user permission set up, user page set up', tool: 'Drupal 7, html, css', portfolio: require('../images/pf_nccmerp.jpg'), portfolio2: require('../images/pf_nccmerp2.jpg'), portfolio3: require('../images/pf_nccmerp3.jpg')}
];




class Portfolio extends Component {

  render() {
    return (
      <section className={portfolio.portfolioImage} >
        <Blog posts={posts} />
      </section>
    );
  }
}

export default Portfolio;