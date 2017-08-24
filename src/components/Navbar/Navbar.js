import React, {Component} from 'react';
// import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="top-bar foundation-5-top-bar">
        <div className="top-bar-title">
          <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
            <button className="menu-icon" type="button" data-toggle></button>
          </span>
          <strong>Site Title</strong>
        </div>
        <div id="responsive-menu">
          <div className="top-bar-left">
            <ul className="dropdown vertical medium-horizontal menu" data-responsive-menu="drilldown medium-dropdown" data-auto-height="true" data-animate-height="true">
              <li>
                <a href="#">Home</a>
              </li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="top-bar-right">

          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
