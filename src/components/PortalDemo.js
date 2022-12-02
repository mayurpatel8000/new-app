import React from 'react'
import { ReactDOM } from 'react'
function PortalDemo() {
  return ReactDOM.CreatePortal (
    <h1>
        portal demo
    </h1>,
  document.getElementById('portal-root')
  )
}

export default PortalDemo