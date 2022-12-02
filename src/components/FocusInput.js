import React, { Component, createRef } from 'react'
import Input from './Input'

class FocusInput extends Component {
   constructor(props) {
     super(props)
   
     this.componentRef = createRef()
   } 
   clickHandler = () => {
        this.componentRef.current.FocusInput()
   }
  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus input</button>
      </div>
    )
  }
}

export default FocusInput