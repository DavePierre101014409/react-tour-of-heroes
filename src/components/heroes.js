import React, { Component } from 'react';



class HeroesComponent extends Component {
    constructor(props){
        super(props);
        this.state ={

            name: "Windstorm",
            id :1
        }

        this.handleChange.bind(this)
    }

    handleChange(newName) {
        this.setState({
            name: newName
        })

    }

  render() {
    return (
      <div className="App">
      <h2>{this.state.name} Details</h2>
      <div><span>id: </span>{this.state.id}</div>
      <div>
          <label>name:
          <input type ="text" value = {this.state.name} onChange = {e => this.handleChange(e.target.value)} placeholder = "name" />
          </label>
      </div>

        
      </div>
    );
  }
}

export default HeroesComponent;
