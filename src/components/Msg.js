import React, { Component } from 'react'

export default class Msg extends Component {
    constructor() {
        super()
        this.state = {
            message: 'welcome visitor'
        }
        
    }
    
    changeMessage () {
        this.setState({
            message: 'thanks for subscribe'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}
