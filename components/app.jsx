import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  render() {
    return (
      <div>App Component</div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const root = document.getElementById("root");
  ReactDOM.render(<App/>, root);
});
