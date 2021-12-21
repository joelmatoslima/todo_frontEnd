import React, { useState, useEffect } from "react";

import PageHeader from "../template/PageHeader";
import TodoForm from "../template/TodoForm";
import TodoList from "./TodoList";
import api from "../services/api";





export default function Home(props) {
  const [lists, setLists] = useState([]);


  function getAllTodo() {
    api.getAll()
      .then(res => {
        setLists(res.data.reverse());
      })
      .catch((e) => {
        console.error(e);
      });

  }

  useEffect(() => {
    getAllTodo()


  }, []);

  function reflesh() {
    getAllTodo()

  }

  function hadleAdd(todo) {
    api.addTodo(todo)
      .then(res => {
        reflesh();
        todo = "";

      })
      .catch((e) => console.log(e));


  }

  function edit(item) {


    api.editTodo(item)
      .then(() => {
        reflesh()

      })
   
  }

  function remake(item) {

    api.remakeTodo(item)
      .then(() => {
        reflesh()

      })

  }

  function remove(item) {

    api.deleteTodo(item.id)
      .then(() => {
        reflesh();
      })
      .catch((e) => console.log("Erro ao deletar " + e));

  }

  return (
    <div>
      <PageHeader nome="Tarefa" small="Cadastro" />
      <TodoForm myClick={hadleAdd} />
      <TodoList lists={lists} remove={remove} edit={edit} remake={remake} />
    </div>
  );
}
