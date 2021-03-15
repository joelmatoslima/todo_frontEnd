import React from 'react';
import "./Button.css"

export default (props) => {   
    
  
    return (
        <button className={`
            button
            ${props.triple ? "triple" : ""} 
            ${props.double ? "double" : ""} 
            ${props.operation ? "operation" : ""} 


        `    

        }

      onClick={(e) => props.click &&  props.click(e.target.innerHTML   )}

    //    onClick={checked}


        
        >
            {props.valor}
        </button>


    )


}






/*if (valorDisplay[0] == 0) {
      
                let newValor = v
    
                setV1(newValor)
                setvalorDisplay([newValor, 100])
    
    
                console.log("setZERO")
    
            } else {
                let newValor = [...v1, v]
                setV1(newValor)
                setvalorDisplay([newValor, 100])
    
    
            }*/