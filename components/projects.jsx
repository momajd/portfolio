import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Project from './project';

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

          <Project title="InsanFran" url="http://insanfran.us"
            technologies={["rails", "react", "postgresql"]}
            imageUrl="http://i.imgur.com/y79QzAR.gif"
            description="InsanFran is a full-stack application for sharing San
              Francisco photography. It was inspired by Instagram. Built
              with Rails, React, Flux. RESTful JSON API on backend, reusable
              view components on frontend, and lots of other good stuff."/>

          <Project title="99Bridges" url="http://ninetyninebridges.herokuapp.com"
          technologies={["rails", "react", "postgresql", "bootstrap"]}
          imageUrl="images/99bridges.png"
          description="99Bridges is an original full-stack application that allows
            bridge engineers and enthusiasts to find and track information
            on bridges. Built with Ruby on Rails, React, Flux,
            React-bootstrap, Google Maps API" />

          <Project title="Sudoku Solver" url="http://momajd.github.io/sudoku-solver/"
          technologies={["javascript", "html", "algorithm"]}
          imageUrl="http://i.imgur.com/KdErCOU.gif"
          description="A sudoku solver that uses a backtracking algorithm. Renders
            animations asynchronously from a queue. Built with Javascript
            and HTML5 Canvas." />

          <Project title="Tron" url="http://momajd.github.io/Tron/"
          technologies={["javascript", "jquery", "html", "algorithm"]}
          imageUrl="http://i.imgur.com/yphZFFg.gif"
          description="Remake of the classic arcade game using Javascript, jQuery,
            HTML5, and CSS. All rendering is done by manipulating HTML
            elements with jQuery." />

          <Project title="Unbeatable Tic-Tac-Toe" url="http://momajd.github.io/Unbeatable-Tic-Tac-Toe"
          technologies={["javascript", "react", "algorithm"]}
          imageUrl="images/tic-tac-toe.png"
          description="A tic-tac-toe game that can't be won. The computer player
            uses a poly-tree data stucture and depth-first-search
            algorithm to find the optimal moves. Built with JS and React." />

          <Project title="Rails Lite" url="https://github.com/momajd/Rails-Lite"
          technologies={["ruby"]}
          imageUrl="images/rails_lite.png"
          description="Rails Lite is a web server MVC framework inspired by the
            functionality of Ruby on Rails. Built in Ruby. Parses requests
            and finds matching routes using regular expression, envokes a
            controller action, and constructs a response using ERB templating." />

        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
