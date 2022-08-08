import React, { Component } from "react"

class InputTodo extends Component {
    constructor(props){
        super(props)
        this.state={
            Title:"",
        }
    }
    onChange=(e)=>{
      this.setState({
        Title: e.target.value
      })
    }
  render() {
    return (
      <form>
        <input type="text" placeholder="Add Todo..." value={this.state.Title} onChange={this.onChange}/>
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo