import React from 'react'
import { GlobalStyles } from '@styles/GlobalStyles'
import './layout.sass'

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}

export default Layout
