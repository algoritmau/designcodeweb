import React from 'react'
import '../../styles/reset.sass'
import './layout.sass'

function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
