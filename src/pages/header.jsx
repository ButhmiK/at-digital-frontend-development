import React from 'react'
import logo from '../assets/Logo.png';
import '../index.css'

function header() {
  return (
    <div>
        <div className='flex justify-between items-center p-6 pl-20 bg-primaryPurple'>
          <img className='w-[238.89px] h-[36.11px]' src={logo} alt='logo'/>
          <div>
            <ul className='flex gap-7 text-white font-inter text-sm capitalize cursor-pointer'>
              <li>SERVICES</li>
              <li>ABOUT US</li>
              <li> CONTACT US</li>
              <li> CAREERS</li>
            </ul>
          </div>

        </div>
    </div>
  )
}

export default header