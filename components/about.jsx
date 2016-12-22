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
  					I'm an engineer with a relentless curiousity and passion for building things.
            <br/><br/>
  					I grew up working in a small family-owned
            construction company and helped build several houses and offices in South Jersey.
  					My background in construction led me to study Civil Engineering at Drexel University,
            where I completed a dual BS/MS program with a concentration in Structural Engineering.
  					After finishing college in 2009, I got a job as a bridge designer in the philly area.
  					During my time as an engineer I got really into automating things, and I started
            dabbling with programming languages such as Ruby and Javascript.
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
