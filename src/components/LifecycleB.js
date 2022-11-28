import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'viswa'
      }
      console.log('lifecycleB constructor')
    }

    static getDerivedStateFromProps(props,state) {
        console.log('lifecycleB getDerivedstate')
        return null
    }
    componentDidMount() {
        console.log('B didmount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('lifecycleB getSanpbefore')
        return null
    }

    componentDidUpdate() {
        console.log('componentB did update')
    }

  render() {
    console.log('LongcycleB render')
    return (
      <div>
        LifecycleBa
      </div>
    )
  }
}

export default LifecycleB