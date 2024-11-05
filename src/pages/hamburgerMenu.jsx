import React from 'react'
import "../index.css"

export default function hamburgerMenu() {
  return (
    <div className='sm:w-[fixed 375px] sm:h-[fixed 812px] sm:top-[-201px] sm:left-[5280px] p-[16px] pr-[20px] pb-[16px] pl-[20px] uppercase bg-white'>
        <div className='w-[fill 335px] h-[hug 268px] gap-[36px]'>
            <div className='w-[fill 335px] h-[hug 28px] gap-8'>
                <p className='w-[fill 335px] h-[hug 17px] font-inter font-medium text-[14px] leading-lh2 uppercase text-dblack'>Services</p>
            </div>
            <div className='w-[fill 335px] h-[hug 28px] gap-8'>
                <p className='w-[fill 335px] h-[hug 17px] font-inter font-medium text-[14px] leading-lh2 uppercase text-dblack'>About us</p>
            </div>
            <div className='w-[fill 335px] h-[hug 28px] gap-8'>
                <p className='w-[fill 335px] h-[hug 17px] font-inter font-medium text-[14px] leading-lh2 uppercase text-dblack'>Contact us</p>
            </div>
            <div className='w-[fill 335px] h-[hug 28px] gap-8'>
                <p className='w-[fill 335px] h-[hug 17px] font-inter font-medium text-[14px] leading-lh2 uppercase text-dblack'>Careers</p>
            </div>

        </div>

    </div>
  )
}
