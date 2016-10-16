import React from 'react';
import ReactDOM from 'react-dom';
// components
import Home from './home';
import Navbar from './navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const root = document.getElementById("root");
  ReactDOM.render(<App/>, root);
});
