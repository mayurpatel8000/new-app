import React, { Component } from 'react'
import Purecom from './components/Purecom'
import Regcom from './components/Regcom'

class Parentcom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'visvas'
    }
  }

//   componentDidMount() {
    // setInterval(() => { 
    //     this.setState({
    //     name:'viswas'
    // })} , 2000)
    
//   }
    
  render() {
    return (   
    //    <React.Fragment>
      <div>
        Parentcom
        <Regcom name={this.state.name} />
        <Purecom name={this.state.name} />
      </div>
    
    )
  }
}

export default Parentcom