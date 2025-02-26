import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import image from '../images/icon_logo.png'
import '../styles/global.scss'

const Navbar = () => {
  return (
    <div className='navbar flex flex-row items-center justify-between mx-auto max-w-[1480px] py-[12px]'>
        <Image src={image} alt="logo" width={64} height={64} />

        <div className='Nav-links flex justify-between max-w-[300px] gap-[10px]'>
            <Link href="#" className='px-[24px] py-[8px] bg-[#2D68F8] rounded-[8px] text-[#fff] border-2 border-[#2D68F8] hover:bg-[#084cf7]'>Home</Link>
            <Link href="#" className='px-[24px] py-[8px] rounded-[8px] hover:border-[#2D68F8] hover:border-2 hover:text-[#2D68F8]'>About</Link>
            <Link href="#" className='px-[24px] py-[8px] rounded-[8px] hover:border-[#2D68F8] hover:border-2 hover:text-[#2D68F8]'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar