import React from 'react'
import Image from 'next/image'
import rocket from '../images/rocket.png'
import whiteRocket from '../images/white_rocket.png'
import bluecard from '../images/blue_laptop.png'
import yellow from '../images/yellow.png'
import triangle from '../images/triangle.png'

const cardData = [
  {
    image: bluecard,
    title: '50+ Best creative website themes & temp',
    content: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. '
  },
  {
    image: yellow,
    title: '50+ Best creative website themes & temp',
    content: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. '
  },
  {
    image: triangle,
    title: '50+ Best creative website themes & temp',
    content: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. '
  },
  {
    image: bluecard,
    title: '50+ Best creative website themes & temp',
    content: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. '
  },
  {
    image: yellow,
    title: '50+ Best creative website themes & temp',
    content: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. '
  },
  {
    image: triangle,
    title: '50+ Best creative website themes & temp',
    content: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. '
  },
];

const Body = () => {
  return (
    <div className='body-container flex flex-col justify-center items-center px-[124px]'>
      <div className='hero flex flex-col justify-center items-center px-[64px] pt-[64px] pb-[12px]'>
        <Image src={rocket} alt='rocket' />
        <p className='hero-build font-semibold text-[44px] text-[#2D68F8] text-center'>Build and Launch Reliable and Market-Ready Products</p>
        <p className='content text-sm px-[106px] text-center'>This 2025, Aique DANG aims to optimize internal structures and processes, ensuring enhanced reliability, integrity, and efficienty, ultimately driving increased profitability for its clients.</p>
        <button className='flex items-center mt-[20px] gap-[10px] bg-[#2D68F8] hover:bg-[#084cf7] rounded-[8px] text-[#fff] rounded-[8px] py-[12px] px-[15px] gap-[8px]'>
          <Image src={whiteRocket} alt='white rocket' className='w-[15px] h-[15px]' />
          Check our solutions
        </button>
      </div>


      <div className="scrollbar card-container flex gap-4 max-w-[1400px] pb-[24px]">
        {cardData.map((card, index) => (
          <div key={index} className={`flex rounded-[4px] shadow-md gap-4 pb-[24px]`}>
            <div className="flex flex-col justify-center">
              <div className='w-[370px] h-[230px]'>
                <Image src={card.image} alt='white rocket'/>
              </div>
              <h2 className="font-bold text-lg text-black text-center px-[32px] py-[20px]">{card.title}</h2>
              <p className='text-sm text-[#637381] text-center pb-[20px] px-[32px]'>{card.content}</p>
              <button key={index} 
                style={{
                  backgroundColor: index === 0 ? '#2D68F8' : '#fff',
                  color: index === 0 ? '#fff' : '#333',
                  border: index === 0 ? 'none' : '2px solid #333',
                  cursor: 'pointer',
                  }
                }
              className='rounded-[50px] hover:bg-[#084cf7] mx-[100px] py-[15px]'>View Details</button>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Body