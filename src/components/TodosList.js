import React from "react";
import TodoItem from "./TodoItem";
import TodoContainer from "./TodoContainer";
class TodoList extends React.Component{


    render(){
return(
    <ul>
      <ul>
        {this.props.todos.map(todo => (
           <TodoItem
           key={todo.id}
           todo={todo}
           handleChangeProps={this.props.handleChangeProps}
           delTodoProps={this.props.delTodoProps}
         />
        ))}
      </ul>


    </ul>
    
)

    }
}
export default TodoList;