import React, { useState } from 'react';
import "./Calculator.css"
import Button from "../components/Button"
import Display from "../components/Display"

const Calculator = () => {
    function fixResul(op) {
        if (op === "=") {
            let resul
            if (ops === "+") {
                resul = Number(v1) + Number(v2)    
            }
            if (ops === "-") {
                resul = Number(v1) - Number(v2)              
            }
            if (ops === "*") {
                resul = Number(v1) * Number(v2)               
            }
            if (ops === "/") {
                resul = ( Number(v1) / Number(v2)     ).toFixed(2)   
            }

            setvalorDisplay(resul)

            setV1("")
            setV2("")
            setTime1(1)

        }

    }

    function clearValue() {
        // Limpa todo o Display
        setvalorDisplay(0)
        setV1("")
        setV2("")
        setTime1(1)

    }
    function clearDisplay() {
        setvalorDisplay(0)
    }



    function setOpetation(op) {
        // Seta o operador, ex: +,-,*,/

        if ((op === "+" || op === "-" || op === "*" || op === "/") && (v1 ===    "")) { //

            return

        } else {
            clearDisplay()
            setTime1(2)
            setOps(op)
            console.log("setando a operaçao")

        }

    }
    function checkFoDoc() {
        alert("pornto")

    }

    function setValue(v) {


        if (v === "." && valorDisplay === 0) {            
            let valor = 0 + "."     
            setV1(valor)
            setvalorDisplay(valor)
        } else {
            if (time1 === 1) {
                let newValue = v1 + v
                setV1(newValue)
                setvalorDisplay(newValue)                

            } else {
                let newValue = v2 + v
                setV2(newValue)
                setvalorDisplay(newValue)

            }

        }    

    }

    const [ops, setOps] = useState()
    const [v1, setV1] = useState("")
    const [v2, setV2] = useState("")
    const [time1, setTime1] = useState(1)
    const [valorDisplay, setvalorDisplay] = useState(0) // no fim esse valor serar salvo para a soma

   


    return (
        <div className="CalculatorTitle">
            <h1>Calculadora</h1>
            <div className="Calculator">
                <Display valorTotal={valorDisplay} />
                <Button valor="AC" click={() => clearValue()} triple />

                <Button valor="/" click={(op) => setOpetation(op)} operation />
                <Button valor="7" click={(v) => setValue(v)} />
                <Button valor="8" click={(v) => setValue(v)} />
                <Button valor="9" click={(v) => setValue(v)} />

                <Button valor="*" click={(op) => setOpetation(op)} operation />

                <Button valor="4" click={(v) => setValue(v)} />
                <Button valor="5" click={(v) => setValue(v)} />
                <Button valor="6" click={(v) => setValue(v)} />

                <Button valor="-" click={(op) => setOpetation(op)} operation />
                <Button valor="1" click={(v) => setValue(v)} />
                <Button valor="2" click={(v) => setValue(v)} />
                <Button valor="3" click={(v) => setValue(v)} />

                <Button valor="+" click={(op) => setOpetation(op)} operation />
                <Button valor="0" click={(v) => setValue(v)} double />
                <Button valor="." click={(v) => setValue(v)} checkFoDoc={() => checkFoDoc()} />
                <Button valor="=" click={(op) => fixResul(op)} operation />





            </div>

        </div>

    )

}

export default Calculator
