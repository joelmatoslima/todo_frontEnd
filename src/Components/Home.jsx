import React, { useState, useEffect } from "react";

import PageHeader from "../template/PageHeader";
import TodoForm from "../template/TodoForm";
import TodoList from "./TodoList";
const axios = require("axios");


const urlPost = "https://minhaapisama.herokuapp.com/todo";
const urGet = "https://minhaapisama.herokuapp.com/todos";
const urlDelete = "https://minhaapisama.herokuapp.com/todo/";
const urlEdit = "https://minhaapisama.herokuapp.com/todo/";
 


export default function Home(props) {
  const [lists, setLists] = useState();

  useEffect(() => {
    axios
      .get(urGet)
      .then((res) => {
        setLists(res.data.reverse());
        //console.log(res.data[1].done)
        console.log("banco de dados carregado");
      })
      .catch((e) => {
        console.log("banco de dados carregado");
      });
  }, []);

  function reflesh() {
    axios.get(`${urGet}`).then((res) => {
      setLists(res.data.reverse());
    });
  }

  function hadleAdd(t) {
    console.log(t);
    
 
    axios
      .post(urlPost, { id: Date.now(), nome: t, done: false })
      .then((res) => {
        console.log("Enviado para o Banco!!!");
        reflesh();
        t = "";
      })
      .catch((e) => console.log("erro ao enviar para o banco // " + e));
  }
  
  function edit(item){
    console.log("editando..." )
    axios.put(urlEdit+item.id,{...item, done: true})
    .then(()=>{
      console.log("editado com sucesso")
      reflesh()

    })
  }

  function remake(item){
    console.log("refazendo...")
    axios.put(urlEdit+item.id,{...item, done: false})
    .then(()=>{
      console.log("editado com sucesso")
      reflesh()

    })

  }

  function remove(item) {
    console.log("clicou para remover");

    axios
      .delete(urlDelete + item.id)
      .then(() => {
        console.log("deletado");
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
