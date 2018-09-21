import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeroesComponent from './components/heroes'

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    title : "Tour of Heroes"
  }
}

  render() {
    return (
      <div>
      <h1>{this.state.title}</h1>
      < HeroesComponent/>
      </div>
      
    );
  }
}

export default App;
