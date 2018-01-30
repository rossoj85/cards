import '../index.scss'
import React, { Component } from 'react';
import { Route, Switch, Fade } from 'react-router-dom';
import {LandingPage} from './index';

export default class Routes extends Component{

    componentDidMount(){
        console.log("Main Component mounted")
        // console.log("Is Webpack Workings?")
       
    }
    render(){
      
        return(
            <div id="mainView">

                <Route exact path='/' component={LandingPage} /> 
            </div>
        )
    }
}
