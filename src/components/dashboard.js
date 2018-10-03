import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'





export default class Dashboard extends Component {
    

    render(){
        return (
        <div>
            <h3>Top Heroes</h3>
            <div className = "grid grid-pad ">
            <a className="col-1 -4">
                <div className="module hero"></div>
                
            </a>
            </div>



        </div>)
    }


}