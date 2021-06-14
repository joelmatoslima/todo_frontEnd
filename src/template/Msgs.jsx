import React, { useEffect, useState } from "react";
import "./Msgs.css";
import frases from "../data/dataBase";

const nuRamdom =  Math.floor(Math.random() * frases.length)
const Msgs = () => {
  const [frase, setFrase] = useState(frases[nuRamdom])

  useEffect(()=>{
    setInterval(function () {
      let nuRamdom =  Math.floor(Math.random() * frases.length)
      setFrase( frases[nuRamdom]  )
    }, 5000);

  },[])



  return (
    <div className="msgs">
      <div className="msgbox">
        <span><i><strong>{frase}</strong> </i> </span>
      </div>
    </div>
  );
};

export default Msgs;
