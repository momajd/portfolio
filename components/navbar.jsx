import React from 'react';

export default class Navbar extends React.Component {
  render () {
    return (
      <div className="navbar">
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Resume</li>
        </ul>
      </div>
    );
  }
}
