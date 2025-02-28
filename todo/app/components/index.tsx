'use client'
import { useEffect, useState } from 'react'
import React from 'react'
import { FaPen } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "@heroui/react";
import '../assets/styles/index.scss'


const Index = () => {
  const dummyData = ['#!/bin/bash', 'shebang'];

  const [list, setList] = useState<string[]>(dummyData);

  const [showInputField, setShowInputField] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const [mapIndex, setMapIndex] = useState<number | null>(null);

  const [editField, setEditField] = useState(false);

  const [toggle, setToggle] = useState(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

  };
  const handleAddToList = () => {
    if (inputValue === '' && editField === true) return;

    setList((current) => [...current, inputValue]);
    setInputValue('');
  };

  const handleRemoveFromList = (index: number) => {
    const deleteList = list.filter((item, i) => i !== index);
    setList(deleteList);
  };

  const handleEditFromList = (index: number) => {
    setMapIndex(index);
    setInputValue(list[index])
  };

  const saveChanges = () => {
    if (mapIndex !== null) {
      const updatedList = [...list];
      updatedList[mapIndex] = inputValue;
      setList(updatedList);
      setMapIndex(null);
      setInputValue('');
      setShowInputField(false);
      setEditField(false);
      setToggle(false);
    }
  }

  const switchButton = () => {
    setToggle(toggle);
  }

  // console.log(list.map(item => item))

  return (
    <div className="flex m-auto flex-col w-[400px] h-[450px]">
      <div className='flex text-[20px] justify-between bg-[#28bf51] w-full px-[10px] py-[10px] text-[#f5f5f5] shadow-lg'>
        To-Do List
        <button onClick={() => setShowInputField(!showInputField)} className='text-[20px] rounded-full hover:bg-[#24ab48] px-[8px]'>+</button>
      </div>

      <div className='flex flex-col h-full border border-[#bdbdbd] bg-[#f0f0f0]'>
        <div className='list flex flex-col mx-[10px] my-[15px] px-[5px] border border-[#bdbdbd] h-full bg-[#fff]'>
          <ul>
            {list.map((item, index) => (
              <li key={index} className='flex justify-between'>
                {mapIndex === index ? (
                  <div>
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                  </div>
                ) : (
                  <span>{item}</span>
                )}


                <div className='space-x-[5px]'>
                  <Button size='sm' className='primary bg-[#16a2b8] rounded-[4px] text-[#fff] p-0 w-fit'
                    onPress={() => { handleEditFromList(index), setEditField(!editField), setToggle(!toggle) }}
                  >
                    <FaPen />
                  </Button>

                  <Button size='sm'
                    onPress={() => handleRemoveFromList(index)} className='bg-[#e74c3c] text-[#fff] rounded-[4px] hover:bg-[#c0392b] p-[5px]'>
                    <AiOutlineDelete />
                  </Button>
                </div>

              </li>
            ))}
          </ul>
        </div>

        <div className='mx-[10px] pb-[5px] max-h-screen'>
          <form onSubmit={(e) => e.preventDefault()} className='flex items-center h-full space-x-[5px]'>
            <p className='text-xs text-[#333] mr-[-10px]'
              style={{
                visibility: showInputField ? 'visible' : 'hidden'
              }}
            >Add Task:
            </p>
            <input className='px-[5px] text-base rounded-[4px] h-full w-full'
              type="text"
              value={inputValue}
              onChange={handleInputChange}

              style={{
                visibility: showInputField ? 'visible' : 'hidden'
              }}
            />

            <Button type="submit" size='sm' className='text-sm bg-[#16a2b8] text-[#fff] rounded-[4px]'
              onPress={toggle ? saveChanges : handleAddToList}
              style={{
                visibility: showInputField ? 'visible' : 'hidden'
              }}
            >
              {toggle ? 'Save' : 'Add'}
            </Button>

          </form>
        </div>




      </div>
    </div>
  )
}

export default Index