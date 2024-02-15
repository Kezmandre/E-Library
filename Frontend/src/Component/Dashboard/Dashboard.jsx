import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Topbar from './Topbar/Topbar'
import { Outlet } from 'react-router'


const Dashboard = () => {
  return (
       <div className='m-0 p-0'>
        <div className='fixed top-0 left-0 bottom-0 z-40 w-[43px] lg:w-[200px] shadow-2xl'>
            <Sidebar/>
        </div>
          <Topbar/>
        <main className='fixed z-10 top-15 w-[400px] sm:w-[500px] md:w-[700px] mx-auto lg:w-[75%]  shadow-current right-0 lg:right-14 h-[90vh]'>
          <Outlet/>
        </main>
       </div>
  )
}

export default Dashboard