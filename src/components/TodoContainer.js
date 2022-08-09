import React from "react";
import TodoList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component{
    constructor(props){
        super(props)    
        this.state ={
        todos:[],
    }}
    addTodoItem = title => {
      const newTodo = {
        id: uuidv4,
        title: title,
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    };
    delTodo=id=>{
    this.setState({
      todos:[
        ...this.state.todos.filter(todo=>{
       return todo.id!==id;
        })
      ]
    })

    }
    handleChange = (id) => {
      this.setState(prevState => ({
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo
        }),
      }))
    }
     
    setUpdate = (updatedTitle, id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.title = updatedTitle
          }
          return todo
        }),
      })
    }
    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(response => response.json())
        .then(data => console.log(data));
    }
    
    render() {
        return (
            <>
      <div className="container">
      <div className="inner">
           <InputTodo addTodoProps={this.addTodoItem} />
            <Header/>
            <TodoList
              todos={this.state.todos}
              handleChangeProps={this.handleChange}
              deleteTodoProps={this.delTodo}
              setUpdate={this.setUpdate}
/>
      </div></div>
            </>
        )
      }
}
export default TodoContainer; 