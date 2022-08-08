import React, { Component } from "react"

class InputTodo extends Component {
    constructor(props){
        super(props)
        this.state={
            Title:"",
            Name:"",
            Age:"",
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.Title);
        this.setState({
            Title:''
        });
      };
    onChange=(e)=>{
      this.setState({
       [e.target.name]:e.target.value
      })
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo..." name= "Title" value={this.state.Title} onChange={this.onChange}/>
        <input type="text" placeholder="Add Name..." name= "Name" value={this.state.Name} onChange={this.onChange}/>
        <input type="text" placeholder="Add age..." name= "Age"  value={this.state.Age} onChange={this.onChange}/>
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo