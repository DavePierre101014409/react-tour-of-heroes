import React, { Component } from 'react';



class HeroesComponent extends Component {
    constructor(props){
        super(props);
        this.state ={

            name: "Windstorm",
            id :1
        }
    }



  render() {
    return (
      <div className="App">
      <h2>{this.state.name} Details</h2>
      <div><span>id: </span>{this.state.id}</div>
      <div>
          <label>name:</label>
          <input type =" text" value = {this.state.name}/>

      </div>

        
      </div>
    );
  }
}

export default HeroesComponent;
