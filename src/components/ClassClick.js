import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler () {
        console.log('class click')
    }
    render() {    
    return (
      <button onClick={this.clickHandler}>ClassClick</button>
    )
  }
}

export default ClassClick;