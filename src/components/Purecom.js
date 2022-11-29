import React, { PureComponent } from 'react'

class Purecom extends PureComponent {
  render(props) {
    console.log("pure component render")
    return (
      <div>Purecom {this.props.name}</div>
    )
  }
}

export default Purecom