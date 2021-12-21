import React from "react";

import Button from "./Button";
import "./TodoList.css";
const TodoList = (props) => {
  const lis = props.lists ;

  const compo = lis.map((i, index) => {
    return (
      <tr key={index} className="capitalize">
        <td className={i.done ? "checked" : ""}>{i.nome}</td>

        <td style={{maxWidth: 90}}>
          {i.done === false ? (
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


      {
          lis.length === 0 &&

          <div className="d-flex justify-content-center p-4">


          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>

          </div>

        }
    </div>
  );
};

export default TodoList;

