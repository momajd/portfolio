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

          <div className="project">
            <a href="http://momajd.github.io/sudoku-solver/" className="image">
              <img src="http://i.imgur.com/KdErCOU.gif"/>
            </a>

            <div className="project-description">
              <p className="project-title">
                <a href="http://momajd.github.io/sudoku-solver/">Sudoku Solver</a>
                &nbsp;
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-html5-plain"></i>
              </p>
              <hr/>
              	<p>A sudoku solver that uses a backtracking algorithm. Built
                  with Javascript and HTML5 Canvas.
                </p>
            </div>
          </div>

          <div className="project">
            <a href="http://momajd.github.io/Tron/" className="image">
              <img src="http://i.imgur.com/yphZFFg.gif"/>
            </a>

            <div className="project-description">
              <p className="project-title">
                <a href="http://momajd.github.io/Tron/">Tron</a>
                &nbsp;
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-jquery-plain"></i>
                <i className="devicon-html5-plain"></i>
              </p>
              <hr/>
                <p>Remake of the classic arcade game using Javascript, jQuery,
                  HTML5, and CSS. All rendering is done by manipulating HTML
                  elements with jQuery
                </p>
            </div>
          </div>

          <div className="project">
            <a href="http://momajd.github.io/Unbeatable-Tic-Tac-Toe" className="image">
              <img src="images/tic-tac-toe.png"/>
            </a>

            <div className="project-description">
              <p className="project-title">
                <a href="http://momajd.github.io/Unbeatable-Tic-Tac-Toe">Unbeatable Tic-Tac-Toe</a>
                &nbsp;
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-react-original"></i>
              </p>
              <hr/>
                <p>A tic-tac-toe game that can't be won. The computer player
                  uses a poly-tree data stucture and depth-first-search
                  algorithm to find the optimal moves. Built with JS and React.
                </p>
            </div>
          </div>

          <div className="project">
            <a href="https://github.com/momajd/Rails-Lite" className="image">
              <img src="images/rails_lite.png"/>
            </a>

            <div className="project-description">
              <p className="project-title">
                <a href="https://github.com/momajd/Rails-Lite">Rails Lite</a>
                &nbsp;
                <i className="devicon-ruby-plain"></i>
              </p>
              <hr/>
                <p>Rails Lite is a web server MVC framework inspired by the
                  functionality of Ruby on Rails. Built in Ruby. Parses requests
                  and finds matching routes using regular expression, envokes a
                  controller action, and constructs a response using ERB templating.
                </p>
            </div>
          </div>

        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
