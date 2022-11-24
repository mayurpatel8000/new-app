import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Message: 'Hello'
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler() {
    //     this.setState ({
    //         Message: 'click done'
    //     })
    //     console.log(this);
    // }

    clickHandler = () => {
            this.setState (
                {
                    Message: 'done'
                }
            )
        }

    render() {
    return (
      <div>
        <div>{this.state.Message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Event button</button> */}
        {/* <button onClick={() => this.clickHandler()}>Event button</button> */}
        <button onClick={this.clickHandler}>Event button</button>
      </div>
    )
  }
}

export default EventBind