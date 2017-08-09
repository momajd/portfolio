import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Project from './project';

export default class Projects extends React.Component {

  constructor() {
    super();
    this.state = {filterItem: "all"};
  }

  updateFilter(e) {
    this.setState({filterItem: e.target.textContent.toLowerCase()});
  }

  render () {
    let filters = ["All", "Ruby", "Rails", "Javascript",
                    "React", "jQuery", "Algorithm", "HTML5"];

    let filterItems = (
      filters.map(filter => {
        let filterClass = this.state.filterItem === filter.toLowerCase() ? (
          "filter-item-underlined") : ("filter-item");

        return (<span key={filter} onClick={this.updateFilter.bind(this)}
                className={filterClass}>
                  {filter}
                </span>);
        })
      );

    let filterItemsWithSeparator = [];
    for (let i = 0; i < filterItems.length; i++) {
      if (i !== 0) { filterItemsWithSeparator.push(<span key={i}> / </span>); }
      filterItemsWithSeparator.push(filterItems[i]);
    }

    return (
      <ReactCSSTransitionGroup
        transitionName="react-transition"
        transitionAppear={true}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppearTimeout={500}>
        <div className="projects-page">
          <h1 className="section-title">Projects</h1>

          <div className="filter-container">
            {filterItemsWithSeparator}
          </div>

          <Project title="Sudoku Solver" url="http://momajd.github.io/sudoku-solver/"
            filter={this.state.filterItem}
            technologies={["javascript", "html5", "algorithm"]}
            imageUrl="http://i.imgur.com/KdErCOU.gif"
            description="A sudoku solver that uses a backtracking algorithm. Renders
              animations asynchronously from a queue. Built with Javascript
              and HTML5 Canvas." />

          <Project title="Planets" url="https://momajd.github.io/planets/"
          filter={this.state.filterItem}
          technologies={["javascript", "html5"]}
          imageUrl="https://media.giphy.com/media/OclNTHOaVRggU/giphy.gif"
          description="A simulation of the solar system that uses Newton's
            Universal Law of Gravitation and 2nd Law of Motion. The user can
            zoom in and out, and also modify the mass of each planet to change
            gravitational effects and orbit." />

          <Project title="InsanFran" url="http://insanfran.us"
            filter={this.state.filterItem}
            technologies={["rails", "react", "postgresql"]}
            imageUrl="http://i.imgur.com/y79QzAR.gif"
            description="InsanFran is a full-stack application for sharing San
              Francisco photography. It was inspired by Instagram. Built
              with Rails, React, Flux. RESTful JSON API on backend, reusable
              view components on frontend, and lots of other good stuff."/>

          <Project title="99Bridges" url="http://ninetyninebridges.herokuapp.com"
            filter={this.state.filterItem}
            technologies={["rails", "react", "postgresql", "bootstrap"]}
            imageUrl="images/99bridges.png"
            description="99Bridges is an original full-stack application that allows
              bridge engineers and enthusiasts to find and track information
              on bridges. Built with Ruby on Rails, React, Flux,
              React-bootstrap, Google Maps API" />

          <Project title="Tron" url="http://momajd.github.io/Tron/"
            filter={this.state.filterItem}
            technologies={["javascript", "jquery", "html5"]}
            imageUrl="http://i.imgur.com/yphZFFg.gif"
            description="Remake of the classic arcade game using Javascript, jQuery,
              HTML5, and CSS. All rendering is done by manipulating HTML
              elements with jQuery." />

          <Project title="Unbeatable Tic-Tac-Toe" url="http://momajd.github.io/Unbeatable-Tic-Tac-Toe"
            filter={this.state.filterItem}
            technologies={["javascript", "react", "algorithm"]}
            imageUrl="images/tic-tac-toe.png"
            description="A tic-tac-toe game that can't be won. The computer player
              uses a poly-tree data stucture and depth-first-search
              algorithm to find the optimal moves. Built with JS and React." />

          <Project title="Ruby Chess AI" url="https://github.com/momajd/Chess-AI"
          filter={this.state.filterItem}
          technologies={["ruby", "algorithm"]}
          imageUrl="images/chess.png"
          description="Chess game with Computer AI playable in the terminal.
            Built in Ruby. Computer player uses a minimax algorithm in order to
            'look ahead'. Heavily object-oriented - utilizes inheritance and
             singleton design pattern." />

          <Project title="Rails Lite" url="https://github.com/momajd/Rails-Lite"
            filter={this.state.filterItem}
            technologies={["ruby"]}
            imageUrl="images/rails_lite.png"
            description="Rails Lite is a web server MVC framework inspired by the
              functionality of Ruby on Rails. Built in Ruby. Parses requests
              and finds matching routes using regular expression, envokes a
              controller action, and constructs a response using ERB templating." />

            <Project title="Mo Majd" url="http://momajd.com"
            filter={this.state.filterItem}
            technologies={["react"]}
            imageUrl="images/portfolio.png"
            description="The site you are currently on was built from scratch
              using React. The cool background is from the particles.js library" />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
