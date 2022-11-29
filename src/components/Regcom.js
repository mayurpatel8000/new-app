import React, { Component } from 'react'

class Regcom extends Component {
  render(props) {
    console.log("regular component render")
    return (
      <div>
        Regular components {this.props.name}
      </div>
    )
  }
}

export default Regcom