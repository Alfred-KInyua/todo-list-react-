import React from "react"
import TodoList from "./TodosList"
class TodoItem extends React.Component{
render(){
    return(
        <li>{this.props.todo.title}</li>
    )
}


}

export default TodoItem