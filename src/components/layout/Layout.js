import React from 'react'
import { SLayout, SMain } from './style'
import Sidebar from '../Sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <SLayout>
        <Sidebar/>
        <SMain>{children}</SMain>
    </SLayout>
  )
}

export default Layout