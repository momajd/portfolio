import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends React.Component {
  render () {
    return (
      <ReactCSSTransitionGroup
        transitionName="react-transition"
        transitionAppear={true}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppearTimeout={500}>

        <div className='about-page'>
          <div className='about-content'>
            <h1 className='section-title'>About Me</h1>
            <br/>
  					I'm a relentlessly curious software developer that loves building things.
            <br/><br/>
  					I grew up working in a small family-owned
            construction company and helped build several houses and offices in South Jersey.
  					My background in construction led me to study Civil Engineering at Drexel University,
            where I completed a dual BS/MS program with a concentration in Structural Engineering.
  					After finishing college in 2009, I got a job as a bridge designer in the philly area.
  					During my time as an engineer I got really into automating things, and I started
            dabbling with programming languages such as Ruby and Python.
            <br/><br/>
  					As my career went on, I became more and more interested in programming,
            and although I loved my career as a bridge designer, I wanted to take
            on a new challenge. I decided to move across the country to San Francisco
            to attend a top web development program called App Academy. I put in ~100
            hour weeks to learn Rails, JS, JQuery, React, Flux, SQL, and many other modern
            languages and frameworks.
            <br/><br/>
            By combining my analytical and problem-solving
            skills from engineering with my programming and web development knowledge,
  					I believe I will be able to make a significant contribution to any team or company.
          </div>

          <img className='portrait' src='images/about_picture.jpg'></img>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
