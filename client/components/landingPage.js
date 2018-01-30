import React, { Component } from 'react';


export default class LandingPage extends Component{

    componentDidMount(){
        console.log("Landing Page mounted")
        // console.log("Is Webpack Workings?")
       
    }
    render(){
      
        return(
          <div>
            <div id="notecards">
                <div className="notecard">
                    <div className="front">
                        <span className="word">Titanosaur</span>
                    </div>

                    <div className="back">
                        <div className="definition">
                            122 ft, 70 tons, Herbivore, Patagonia about 100 to 95 million years ago
                            <div className="photo"></div>
                        </div>
                    </div>
                </div>
            </div>
            
          </div>
        )
    }
}