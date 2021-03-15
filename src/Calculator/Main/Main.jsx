import React, {Component} from 'react';
import "./Main.css"
import Calculator from '../Main/Calculator';



export default class Main extends Component{
    render(){
        return(
            <div className="MainClass">                               
                <Calculator/>
            </div>
        )
    }
}
