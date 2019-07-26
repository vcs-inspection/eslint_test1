import React, { Component } from 'react';
import Amplify, { API, Auth } from "aws-amplify";
import aws_exports from './aws-exports';
import { withAuthenticator } from "aws-amplify-react";

import logo from './logo.svg';
import './App.css';
Amplify.configure(aws_exports);

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
        result: ""
    }
  }
  componentDidMount() {
    this.printTokens();
    this.getTest();

  }
  
  getTest = () => {
    API.get("viewerApi", "/api")
    .then((responseJson) => {
        console.log(responseJson);
    })
  };

  printTokens(){
    console.log(Auth.currentSession().then(res=>{
        let accessToken = res.getAccessToken()
        let jwt = accessToken.getJwtToken()
        console.log(`AccessToken: ${JSON.stringify(accessToken)}`)
        console.log("\n\n")
        console.log(`JWT: ${jwt}`)
      })
    )
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

export default withAuthenticator(App, true);
