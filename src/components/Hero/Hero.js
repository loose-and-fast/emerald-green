import React, {Component} from 'react';
// import './Hero.css';

class Hero extends Component {

  render() {
    return (
      <div className="marketing-site-hero">
        <div className="marketing-site-hero-content">
          <h1>Emerald Green Consulting</h1>
          <p className="subheader">
            Contact us for your software development needs. We work with React, Angular,
            and NodeJS.
          </p>
          <a href="#" className="round button">Contact Us</a>
        </div>
      </div>
    )
  }
}
export default Hero;
