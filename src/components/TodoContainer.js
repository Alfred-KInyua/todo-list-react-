import React from "react";
import TodoList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component{
    constructor(props){
        super(props)    
        this.state ={
        todos:[
            { id:1,
              title:"Setup development environment",
              completed:true,
            },
            { id:2,
              title:"Develop a website and add content",
              completed:false,
            },
            { id:3,
              title:"Deploy to live server",
              completed:false,
              }
        ],
    }}
    addTodoItem = title => {
      const newTodo = {
        id: 4,
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