import React from "react";

import Button from "./Button";
import "./TodoList.css";
const TodoList = (props) => {
  const lis = props.lists || [];
 

  const compo = lis.map((i, index) => {
    return (
      <tr key={index} className="capitalize">
        <td className={i.done ? "checked" : ""}>{i.nome}</td>

        <td>
          {i.done === false  ? (
            <Button
              label="Feito" 
              styleBootstrap="btn-success"
              
              click={props.edit}
              item={i}
            />
          ) : (
            <>
              <Button
                label="Refazer"
                styleBootstrap="btn-warning"
                
                click={props.remake}
                item={i}
              />

              <Button
                label="Deletar"
                styleBootstrap="btn-danger"
                
                click={props.remove}
                item={i}
              />
            </>
          )}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Descriçao</th>

            <th scope="col">Açoes</th>
          </tr>
        </thead>
        <tbody>{compo}</tbody>
      </table>
    </div>
  );
};

export default TodoList;

/*

<button
            type="button"
            className="btn btn-success"
            onClick={() => done(i)}
          >
            Ok
          </button>

          <button
            type="button"
            className="btn btn-warning m-1"
            
            
            onClick={() => props.remove(i.id)}
          >
            Refazer
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.remove(i.id)}
          >
            Deletar
          </button>




          */
