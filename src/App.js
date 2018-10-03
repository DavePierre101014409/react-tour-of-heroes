import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'

import './App.css';

import HeroesComponent from './components/heroes'

const NewRoute = () => {
  return(
    <div>
      <p> NEw rewrf</p>


    </div>

  );
}


class App extends Component {
constructor(props){
  super(props);

  this.state = {
    title : "Tour of Heroes"
  }
  this.handleChange.bind(this)

}

handleChange(event) {
    this.setState({
      title: event.target.value
    })

}

  render() {
    return (
      <div>
      <h1>{this.state.title}</h1>
      < HeroesComponent/>


       <BrowserRouter>
        <Route path="/new" component = {NewRoute}/>
      
        </BrowserRouter>

      </div>

     
      
    );
  }
}

export default App;
