import axios from "axios";

import { Todo } from "@/components/model/Todo";

interface State {
    todos: Todo[];
}
  
  const state: State = {
    todos: []
  };


const getters={
    allTodos : (state:State)=>state.todos
}

const actions ={
    async fetchTodos({ commit }) {
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos', result.data)
    }
    ,

    async addTodo ({commit}, payload:Todo){
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos',
            { title: payload.title, completed: false }
          );
        commit('addTodo', response.data)
    },
    async deleteTodo({commit},id:number){
         await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id)
    },
    async filterTodo({commit},count:number){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`)
       commit('getTodosByCount', response.data)
   },
   async updateTodo({commit},updatedTodo:Todo){
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo)
   commit('updateTodoStatus', response.data)
},
}

const mutations={
    setTodos : (state:State, todos:Todo[])=> (state.todos = todos),
    addTodo : (state:State, todo:Todo)=> state.todos.unshift(todo),
    removeTodo: (state:State,id:number)=>  (state.todos = state.todos.filter((todo)=> todo.id !== id)),
    getTodosByCount: (state:State,todos:Todo[])=>  (state.todos =todos),
    updateTodoStatus: (state:State,updatedTodo:Todo)=>  {
        const index = state.todos.findIndex((todo)=> todo.id === updatedTodo.id)
        if(index !== -1){
            state.todos.splice(index,1, updatedTodo)
        }
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}