import React from 'react'
import MyDrawer from './MyDrawer'

function Header() {
  return (
    <div className='fixed w-full z-50 top-0 left-0'>
        <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
            <div className="text-2xl">DanialK007</div>
            <div className="">
                <MyDrawer />
            </div>
        </div>
    </div>
  )
}

export default Header
