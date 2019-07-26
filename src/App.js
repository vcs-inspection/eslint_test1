import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
        result: ""
    }
  }
  componentDidMount() {

  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color: "Black"}}>
          A Nodejs Express.js server serving a production built Reactjs application.
        </p>
        <p>
          {this.state.result}
        </p>
      </header>
    </div>
  );
}};

export default App;
