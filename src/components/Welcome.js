import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name, patName} = this.props
        return <h1>Hello welcome {name} is {patName}</h1>
    }
}

export default Welcome;