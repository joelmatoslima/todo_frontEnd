import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [text, setText] = useState("");

  function keyEnter(e){
    if(e.key === "Enter"){
      validation()
    }

  }

  function validation() {
    if (text.trim() === "" || text.trim().length < 3) {
      alert("Preencha o campo corretamente");
     
    } else {
      props.myClick(text);
      setText("");
      document.querySelector("input").focus();
    }
  }

  return (
    <div className="todoForm my">
      <div className="col-xs-12 col-sm-9 col-md-10">
        <input
          id="inpu"
          className="form-control  "
          type="text"
          placeholder="Digite a Tarefa"
          value={text}
          onKeyUp={keyEnter}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>

      <div className="col-xs-12 col-sm-3 col-md-2">
        <button
          onClick={() => {
            validation();
          }}
          className="btn btn-primary"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
