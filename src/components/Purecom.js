import React, { PureComponent } from 'react'

class Purecom extends PureComponent {
  render(props) {
    return (
      <div>Purecom {this.props.name}</div>
    )
  }
}

export default Purecom