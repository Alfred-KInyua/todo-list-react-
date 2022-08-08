import React from "react"
import TodoList from "./TodosList"
class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Title:"",
        }
    }
render(){
    return(
        <>
        <button onClick={()=>this.props.delTodoProps(this.props.todo.id)}>Delete</button>
        <li><input type="checkbox" checked={this.props.todo.completed}
             onChange={() => this.props.handleChangeProps(this.props.todo.id)} />{this.props.todo.title}
        </li>   
        </>    
    )
}


}

export default TodoItem;