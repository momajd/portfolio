import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Skills extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="react-transition"
        transitionAppear={true}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppearTimeout={500}>

        <div className="skills-page">
          <h1 className="section-title">Skills</h1>
          <div className="skills-container">
            <span className="skill">
              <i className="devicon-javascript-plain"></i>
              <p>Javascript</p>
            </span>
            <span className="skill">
              <i className="devicon-ruby-plain colored"></i>
              <p>Ruby</p>
            </span>
            <span className="skill">
              <i className="devicon-rails-plain colored"></i>
              <p>Rails</p>
            </span>
            <span className="skill">
              <i className="devicon-react-original colored"></i>
              <p>React</p>
            </span>
            <span className="skill">
              <i className="devicon-jquery-plain colored"></i>
              <p>jQuery</p>
            </span>
            <span className="skill">
              <i className="devicon-postgresql-plain colored"></i>
              <p>PostgreSQL</p>
            </span>
            <span className="skill">
              <i className="devicon-html5-plain colored"></i>
              <p>HTML</p>
            </span>
            <span className="skill">
              <i className="devicon-css3-plain colored"></i>
              <p>CSS</p>
            </span>

          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
