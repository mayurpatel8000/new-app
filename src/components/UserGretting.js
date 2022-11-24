import React, { Component } from 'react'

class UserGretting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {
    return (
        this.state.isLoggedIn && <div>welcome wiswas</div>
    )

    // return (
    //     this.state.isLoggedIn ? (
    //         <div>Welcome wiswas</div>
    //     ) : (
    //         <div>Welcome guest</div>
    //     )
    // ) 



    // let message

    // if (this.state.isLoggedIn) {
    //     message = <div> welcome visvas </div>
    // } else {
    //     message = <div>welcome guest</div>
    // }

    // return (
    //     <div>
    //         {message}
    //     </div>
    // )


    // if (this.state.isLoggedIn) {
    //     return (
    //         <div>
    //             welcome viswas
    //         </div>
    //     )
    // } else {
    //     return (
    //          <div>
    //             welcome guest
    //          </div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>welcome visvas</div>
    //     <div>welcome guest</div>
    //   </div>
    // )
  }
}

export default UserGretting