import React, { Component } from 'react';

import HeroDetail from './hero-detail'
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
        <li key = {hero.id.toString()} onClick= { ()=> this.onSelectHero(hero.id)} className> 
        <span className="badge">{hero.id}</span> {hero.name}
        </li>);
        

    
    

        return heroesItems;
    
       
    }

    

  render() {


   
    return (
      <div>
      <div >
          <ul className= "heroes">
              {this.renderHeroList()}
          </ul>
       
      </div>
      
        <div>
            <HeroDetail value = {this.state.selectedHero} onChange= {(e) => this.handleChange(e.target.value)}></HeroDetail>
        </div>


      </div>
    );
  }
}

export default HeroesComponent;
