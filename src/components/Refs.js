import React, { Component } from 'react'

export class Refs extends Component {
   constructor(props) {
     super(props)
   
     this.inputRef = React.createRef()
     this.cbRef = null
     this.setCbRef = element => {
         this.cbRef = element
     }
   } 

clickHandler = () => {
    alert(this.input.current.value)
}
   componentDidMount() {
    // this.inputRef.current.focus()
    //     console.log(this.inputRef)

    if (this.cbRef) {
        this.cbRef.focus()
    }
   }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>submit</button>
      </div>
    )
  }
}

export default Refs