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
        e.preventDefault()
        if (this.state.Title.trim()) {
          this.props.addTodoProps(this.state.Title)
          this.setState({
            Title: "",
          })
        } else {
          alert("Please write item")
        }
      }
    onChange=(e)=>{
      this.setState({
       [e.target.name]:e.target.value
      })
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" placeholder="Add Todo..." name= "Title" value={this.state.Title} onChange={this.onChange}/>
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo