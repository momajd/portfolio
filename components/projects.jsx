import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Projects extends React.Component {

  render () {

    return (
      <ReactCSSTransitionGroup
        transitionName="react-transition"
        transitionAppear={true}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppearTimeout={500}>
        <div className="projects-page">
          <h1 className="section-title">Projects</h1>
          <div className="projects-container">
            <div className="project">
              <a href="http://insanfran.us" className="image">
                <img src="http://i.imgur.com/y79QzAR.gif"/>
              </a>

              <div className="project-description">
                <p className="project-title">
                  <a href="http://insanfran.us">InsanFran</a>
                  &nbsp;
                  <i className="devicon-rails-plain"></i>
                  <i className="devicon-react-original"></i>
                  <i className="devicon-postgresql-plain"></i>
                </p>
                <hr/>
                <p>InsanFran is a full-stack application for sharing San
                  Francisco photography. It was inspired by Instagram. Built
                  with Rails, React, Flux. RESTful JSON API on backend, reusable
                  view components on frontend, and lots of other good stuff.
                </p>
              </div>
            </div>

            <div className="project">
              <a href="http://ninetyninebridges.herokuapp.com" className="image">
                <img src="images/99bridges.png"/>
              </a>

              <div className="project-description">
                <p className="project-title">
                  <a href="http://ninetyninebridges.herokuapp.com">99Bridges</a>
                  &nbsp;
                  <i className="devicon-rails-plain"></i>
                  <i className="devicon-react-original"></i>
                  <i className="devicon-postgresql-plain"></i>
                </p>
                <hr/>
                <p>99Bridges is an original full-stack application that allows
                  bridge engineers and enthusiasts to find and track information
                  on bridges. Built with Ruby on Rails, React, Flux,
                  React-bootstrap, Google Maps API </p>
              </div>
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
