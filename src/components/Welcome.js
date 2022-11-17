import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return <h1>Hello welcome {this.props.name} is {this.props.patName}</h1>
    }
}

export default Welcome;