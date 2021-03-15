import React, {Component} from 'react';
import "./Calculator.css"
import Button  from "../components/Button" 
import Display  from "../components/Display" 

export default class Calculator extends Component{

    clearValue(){
        console.log("limpo")
    }
    
    setOpetation(op){
        console.log(op)

    }

    setValue(v){
        console.log(v)
      //  this.valorDisplay = this.valorDisplay +1

      this.novo = this.valorDisplay + 2


    }

    



    
    render(){

       // const showValue1 = e => this.showValue(e)

       this.valorX = this.novo

        

        return(
            <div className="CalculatorTitle">
                <h1>Calculadora</h1>
                <div className="Calculator">   
                    <Display valorTotal={this.valorX}/>                 
                    <Button valor="AC" click={()=> this.clearValue()} triple/>

                    <Button valor="/" click={(op)=> this.setOpetation(op)} operation  />
                    <Button valor="7" click={(v)=> this.setValue(v)}/>
                    <Button valor="8" click={(v)=> this.setValue(v)}/>
                    <Button valor="9" click={(v)=> this.setValue(v)}/>

                    <Button valor="*" click={(op)=> this.setOpetation(op)} operation/>

                    <Button valor="4" click={(v)=> this.setValue(v)}/>
                    <Button valor="5" click={(v)=> this.setValue(v)}/>
                    <Button valor="6" click={(v)=> this.setValue(v)}/>

                    <Button valor="-" click={(op)=> this.setOpetation(op)} operation/>
                    <Button valor="1" click={(v)=> this.setValue(v)}/>
                    <Button valor="2" click={(v)=> this.setValue(v)}/>
                    <Button valor="3" click={(v)=> this.setValue(v)}/>

                    <Button valor="+" click={(op)=> this.setOpetation(op)} operation/>
                    <Button valor="0" click={(v)=> this.setValue(v)} double/>
                    <Button valor="." click={(v)=> this.setValue(v)}/>
                    <Button valor="=" click={(op)=> this.setOpetation(op)} operation/> 


                    
          

                </div>

            </div>
            
        )
    }
}