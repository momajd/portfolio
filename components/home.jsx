import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <ReactCSSTransitionGroup
          transitionName="home"
          transitionAppear={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppearTimeout={500}>
        <p className="title">Mohammad Majd</p>
        <p className="description">Software Developer</p>

        <div className="home-icons">
          <i className="fa fa-github" aria-hidden="true"></i>
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
