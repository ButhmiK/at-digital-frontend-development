import React from 'react'
import '../index.css'
import flogo from '../assets/Logo.png';

function footer() {
  return (
    <div className='w-[fixed 1440px] h-[Hug 77px] flex justify-between p-26 pl-80  bg-primaryPurple '>
        <div className='w-[fixed 413px] h-[Hug 102px] grid gap-20'>
        <img className= 'w-[238.89px] h-[36.11px] top -[-11.11px]'src={flogo} alt=''/><br/>
        <p className='w-[413px] h-[57px] text-white font-lato'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
    </div>
    <div className='w-[fixed 197px] h-[Hug 141px] grid gap-12 '>
        <h3 className='w-[179px] h-[25px] text-white font-inter font-semibold leading-lh1'>Our Technologies</h3>
        <ul className='w-[Hug 56px] h-[Hug 14px] grid gap-12 '>
            <li className='w-[56px] h-[17px] font-medium text-white text-[14px] font-inter leading-lh2'>ReactJS</li>
            <li className='w-[56px] h-[17px] font-medium text-white text-[14px] font-inter leading-lh2'>Gatsby</li>
            <li className='w-[56px] h-[17px] font-medium text-white text-[14px] font-inter leading-lh2'>NextJs</li>
            <li className='w-[56px] h-[17px] font-medium text-white text-[14px] font-inter leading-lh2'>NodeJs</li>
        </ul>
    </div>
    <div className='w-[fixed 197px] h-[Hug 129px] grid gap-12 '>
        <h3 className='w-[132px] h-[25px] text-white font-inter font-semibold leading-lh1'>Our Services</h3>
        <ul className='w-[fill 197px] h-[Hug 92px] grid gap-12 '>
            <li className='w-[56px] h-[17px] font-medium text-white text-[14px] font-inter leading-lh2'>Social media Marketing</li>
            <li className='w-[56px] h-[17px] font-medium text-white text-[14px] font-inter leading-lh2'>Web & Mobile App Development</li>
            <li className='w-[56px] h-[17px] font-medium text-white text-[14px] font-inter leading-lh2'>Data & Analytics</li>
        </ul>
    </div>
    </div>
  )
}

export default footer