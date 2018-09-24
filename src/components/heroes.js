import React, { Component } from 'react';
import { HEROES } from '../mock-heroes';

import './styles.css'


class HeroesComponent extends Component {
    constructor(props){
        super(props);
        this.state ={

            

            heroes : HEROES,

            selectedHero :{}
        }


        this.onSelectHero.bind(this)
        this.handleChange.bind(this)
        this.renderHeroList.bind(this)

       
    }

    onSelectHero(heroId){

        const myHeros = this.state.heroes;
        const selectedHeroObj = (myHeros.filter(hero=> hero.id == heroId))[0]
        console.log(selectedHeroObj)
        this.setState({
            selectedHero:selectedHeroObj
            


        })
        
      
    
    }

    handleChange(newName) {


        let newHero = this.state.selectedHero
        newHero.name = newName
        this.setState({
            selectedHero : newHero
        })

    }



  
    renderHeroList(){
        const heroesItems = (this.state.heroes).map((hero) => 
        <li key = {hero.id.toString()} onClick= { ()=> this.onSelectHero(hero.id)}> 
        <span className="badge">{hero.id}</span> {hero.name}
        </li>);
      
    

        return heroesItems;
    
       
    }

    renderHeroDetails(){

        // The hero details from the first part
        const selectedHeroDetail =  <div>
            <h2>{this.state.selectedHero.name} Details</h2>
            <div><span>id: </span>{this.state.selectedHero.id}</div>
            <div>
                <label>name:
          <input type="text" value={this.state.selectedHero.name} onChange={e => this.handleChange(e.target.value)} placeholder="name" />
                </label>
            </div>

        </div> 

        // if there is a selectedHero selected then assigned it to the tobe return variabe 
        if (this.state.selectedHero.id){
            return selectedHeroDetail
        }else{
            return
        }
        


      

    }

  render() {

    const heroesItems = this.renderHeroList()
    const heroDetails = this.renderHeroDetails()
    return (
      <div>
      <div >
          <ul className= "heroes">
              {heroesItems}
          </ul>
       
      </div>
      
        <div>

            {heroDetails}
        </div>


      </div>
    );
  }
}

export default HeroesComponent;
