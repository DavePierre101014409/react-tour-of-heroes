import React, { Component } from 'react';
import { HEROES } from '../mock-heroes';




class HeroDetail extends Component {

    
      
        




    
  render() {
        const selectedHeroDetail =  <div>
            <h2>{this.props.value.name} Details</h2>
            <div><span>id: </span>{this.props.value.id}</div>
            <div>
                <label>name:
          <input type="text" value={this.props.value.name} onChange = {(e)=> this.props.onChange(e)} placeholder="name" />
                </label>
            </div>

        </div> 

        // if there is a selectedHero selected then  return the details or nothing 
        if (this.props.value.id){
            return selectedHeroDetail
        }else{
            return <div></div>
        }
    
    
  }
}


export default HeroDetail;