import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'viswa'
      }
      console.log('lifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state) {
        console.log('lifecycleA getDerivedstatefromprops')
        return null
    }
    componentDidMount() {
        console.log('A didmount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('lifecycleA getSanpbefore')
        return null
    }

    componentDidUpdate() {
        console.log('componentA did update')
    }

    changeState = () => {
        this.setState({
            name: 'codeevolution'
        })
    }

  render() {
    console.log('LongcycleA render')
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
      
    )
  }
}

export default LifecycleA