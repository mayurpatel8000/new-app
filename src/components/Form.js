import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       comment: '',
       topic:''
    }
  } 
  
  

  handleCommentChange =(event) => {
    this.setState ({
      comment: event.target.value
    })
  }
  handleTopicChange =(event) => {
    this.setState ({
      topic: event.target.value
    })
  }

  handleUsernameChange = (event) => {
    this.setState ({
         username: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    event.preventDefault();
  }

  render() {
    const { username, comment, topic} = this.state
    return (
     
       <form onSubmit={this.handleSubmit}>       
        <div>
            <label>Username</label>
            <input type='text' value={username}  onChange={this.handleUsernameChange}/>
        </div>
        <div>
          <label>comments</label>
          <textarea value={comment} onChange={this.handleCommentChange}></textarea>
        </div>
        <div>
        <label>Topic</label>
        <select value={topic} onChange={this.handleTopicChange}>
          <option value="react">react</option>
          <option value="angular">angular</option>
          <option value="vue">vue</option>
        </select>        
        </div>
        <button type="submit">submit</button>
      </form>      
     
    )
  } 
}

export default Form