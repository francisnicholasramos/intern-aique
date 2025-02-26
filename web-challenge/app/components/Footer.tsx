import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Form from 'next/form'
import house from '../images/house.png'
import '../styles/global.scss'

const Footer = () => {
  return (
    <div className='footer flex m-auto justify-between max-w-[1480px] pb-[24px]'>
        <div className='flex flex-col py-[24px]'>
            <p className='font-[700] text-[#2D68F8] '>Contact Us</p>
            <p className='get-in-touch text-[42px] font-[600]'>Get In Touch With Us</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor</p>
            <div className='flex py-[5px] '>
                <Image src={house} alt='house'/>
                <div className='pl-[10px]'>
                    <p className='font-[700]'>Our Location</p>
                    <p className='font-[400]'>One World Place, Lane R, BGC</p>
                </div>
            </div>

            <div className='flex py-[5px] '>
                <Image src={house} alt='house'/>
                <div className='pl-[10px]'>
                    <p className='font-[700]'>Our Location</p>
                    <p className='font-[400]'>One World Place, Lane R, BGC</p>
                </div>
            </div>

            <div className='flex py-[5px] '>
                <Image src={house} alt='house'/>
                <div className='pl-[10px]'>
                    <p className='font-[700]'>Our Location</p>
                    <p className='font-[400]'>One World Place, Lane R, BGC</p>
                </div>
            </div>
        </div>

        <div className='form relative w-[686px] h-[428px] bg-[#eeebff] rounded-[12px] mx-[20px] mt-[30px]'>
            <div className='blur top-0 right-0'></div>
            <div className='blur bottom-0'></div>

            <p className='font-[700] p-[24px]'>Send us message</p>

            <div className='flex flex-col p-[24px]'>
                <p className='label '>Full Name</p>
                <input type="text" id='name' className='input'/>

                <p className='label'>E-mail</p>
                <input type="email" id='email' className='input'/>

                <p className='label'>Phone</p>
                <input type="text" id='phone' className='input'/>

                <p className='label'>Message</p>
                <input type="text" id='message' className='input'/>
            </div>

        </div>

    </div>
  )
}

export default Footer   