import React from "react";
import TodoList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component{
    constructor(props){
        super(props)    
        this.state ={
        todos:[
            { id:uuidv4(),
              title:"Setup development environment",
              completed:true,
            },
            { id:uuidv4(),
              title:"Develop a website and add content",
              completed:false,
            },
            { id:uuidv4(),
              title:"Deploy to live server",
              completed:false,
              }
        ],
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
     

    render() {
        return (
            <>
           <InputTodo addTodoProps={this.addTodoItem} />
            <Header/>
            <TodoList todos={this.state.todos} 
              handleChangeProps={this.handleChange}
              delTodoProps={this.delTodo}/>
            </>
        )
      }
}
export default TodoContainer; 