import axios from 'axios'
const URL_BASE = "https://minhaapisama.herokuapp.com"
export default {
    getAll(){
        return axios.get(URL_BASE+"/todos")
    },
    addTodo(todo){
        return axios.post(URL_BASE+"/todo", { id: Date.now(), nome: todo, done: false })


    },
    editTodo(item){
        return axios.put(URL_BASE+"/todo/"+item.id, { ...item, done: true })


    },
    remakeTodo(item){
        return axios.put(URL_BASE+"/todo/"+item.id, { ...item, done: false })
    },
    deleteTodo(id){
        return  axios.delete(URL_BASE+"/todo/"+id)
    }
}