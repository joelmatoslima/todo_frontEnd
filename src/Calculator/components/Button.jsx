import React from 'react';
import "./Button.css"

 const button = (props) => {   
    
  
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




export default button
