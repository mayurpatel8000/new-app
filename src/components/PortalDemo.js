import React from 'react'
import ReactDOM from 'react-dom'
function PortalDemo() {
  return ReactDOM.createPortal (
    <h1>portal demo</h1>,
  document.getElementById('portal-root')
  )

  // return ReactDOM.(
  //   <h1>
  //     portal demo
  //   </h1>
  // )
}

export default PortalDemo