import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar1 from './Sidebar1'

export default function Dashboard() {
  return (
    <>
    <Navbar/>
    <div className='d-flex'>
        <Sidebar1/>
        <Outlet/>
    </div>
    </>
  )
}
