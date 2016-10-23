import React from 'react';

export default class Project extends React.Component {

  render() {
    const iconClasses = {
      "rails": "devicon-rails-plain",
      "ruby": "devicon-ruby-plain",
      "postgresql": "devicon-postgresql-plain",
      "javascript": "devicon-javascript-plain",
      "jquery": "devicon-jquery-plain",
      "html5": "devicon-html5-plain",
      "react": "devicon-react-original",
      "bootstrap": "devicon-bootstrap-plain"
    };

    let icons = this.props.technologies.map( icon => {
      return <i key={icon} className={iconClasses[icon]}></i>;
    });

    let project;
    if (this.props.filter === "all" || this.props.technologies.includes(this.props.filter) ) {
      project = (
        <div className="project">
          <a href={this.props.url} className="image">
            <img src={this.props.imageUrl}/>
          </a>

          <div className="project-description">
            <p className="project-title">
              <a href={this.props.url}>{this.props.title}</a>
              &nbsp;
              {icons}
            </p>
            <hr/>
            <p>
              {this.props.description}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div>
        {project}
      </div>
    );
  }
}
