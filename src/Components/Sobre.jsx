import React from "react";
import PageHeader from "../template/PageHeader";
import './Sobre.css'

export default function Sobre() {
  return (
    <div className="sobre">
      <PageHeader nome="Sobre" small="Todo" />

      <p>
        Este pequeno app foi feito utilizando as seguintes tecnologias: <br />
         * Front End:  <br />
             - React.js;  <br />
             - Bootstrap;  <br />
         * Backend:  <br />
           - Node.js  <br />
          
      </p>
      
      <h4>Resumo do App-Todo:</h4>
      <hr />
      <p>- Aplicativo simples para cadastro de tarefas, coisas a fazer. Uma SPA (single page application), nele foi ultilizado rotas e serviço de Backend </p>
      <p>- No canto superior a direita, deixei algumas <i>frases</i> aleatorias passando a um certo intervalo de tempo, apenas pensamentos aleatorios.</p>
      <p>
        - Como mencionado acima, no <strong>front end </strong> usei a biblioteca
        Javascript React.js para a construçao do mesmo, junto a algumas classes
        do Bootstrap para facilitar a contruçao do layout.
      </p>
      <p>
        - Ja no <strong>Back end</strong> usei o Node.js para criar uma{" "}
        <strong>api</strong> para cadastrar as tarefas
      </p>


      <PageHeader nome="Sobre" small="Calculadora" />
      <p>Pequena Calculadora simples, para por em prática os conhecimentos em React.js</p>

      
    </div>
  );
}
