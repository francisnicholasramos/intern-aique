'use client'
import { useState } from 'react'
import React from 'react'
import '../assets/styles/index.scss'

const Index = () => {
  const [inputField, setInputField] = useState(false)

  return (
    <div className="flex m-auto flex-col w-[400px] h-[400px]">
      <div className='flex text-[20px] justify-between bg-[#28bf51] w-full px-[10px] py-[10px] text-[#f5f5f5] shadow-lg'>
        Todo List
        <button onClick={() => setInputField(!inputField)} className='text-[20px] rounded-full hover:bg-[#24ab48] px-[8px]'>+</button>
      </div>

      <div className='flex flex-col h-full border border-[#bdbdbd] bg-[#f0f0f0]'>
        <div className='list flex flex-col mx-[10px] my-[15px] px-[5px] border border-[#bdbdbd] h-[80%] bg-[#fff]'>
         <p>test</p>
         <p>test</p>
         <p>test</p>
         <p>test</p>
         <p>test</p>
         <p>test</p>
         <p>test</p>
         <p>test</p>
         <p>test</p>
         <p>test</p>
         <p>test</p>
         <p>test</p>
         <p>test</p>
        </div>
        
        <input type="text" className='px-[5px] mx-[70px] text-[14px]'
          style={{
            visibility: inputField ? 'visible' : 'hidden'
          }}  
        />
      </div>
    </div>
  )
}

export default Index