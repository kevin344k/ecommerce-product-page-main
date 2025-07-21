import React, { useRef } from 'react';
import Card from './Card';
import left_icon from "/images/icon-left-arrow.svg";
import right_icon from "/images/icon-right-arrow.svg";
import { useNavigate } from 'react-router-dom';



export default function SectionCards({ data, titulo }) {
  const sectionRef = useRef();
  const navigate = useNavigate();


  const handlerClickLeft = () => {
    sectionRef.current.scrollBy({ left: -270, behavior: 'smooth' });
  };

  const handlerClickRight = () => {
    sectionRef.current.scrollBy({ left: 270, behavior: 'smooth' });
  };

const handleAllItems=()=>{
 navigate(`/ver-todo/${encodeURIComponent(titulo)}`, { state: { data } });
}
  return (
    <>
      <div className='flex justify-between mt-30 items-center mb-4 w-full'>
        <p className='font-fm-public-sans font-bold text-xl text-center lg:text-left lg:text-3xl '>{titulo}</p>
        <button onClick={handleAllItems}  className='rounded-sm bg-fm-Pale-orange p-2 text-fm-Orange hover:cursor-pointer'>Ver todo...</button>
      </div>
      <div className='relative  m-auto lg:w-[1000px] xl:w-[1100px] '> 
        <button
          onClick={handlerClickLeft}
          className='hidden lg:flex absolute top-[calc(50%-6px)]  z-50 -left-15 p-2 bg-neutral-100 border rounded-full border-neutral-300 hover:cursor-pointer'>
         <img className='w-6' src={left_icon}></img>
        </button>
        <div
          ref={sectionRef}
          id={`section-${titulo}`}
          className='flex snap-x snap-mandatory overflow-x-scroll snap-center scroll-snap-x scroll-smooth gap-4 p-4 w-full'>
          <div className='flex gap-6'>
            {data.map((producto, index) => (
              <Card key={index} producto={producto} />
            ))}
          </div>
        </div>
        <button
          onClick={handlerClickRight}
          className='hidden lg:flex absolute -right-15 top-[calc(50%-6px)] p-2 bg-neutral-100 border rounded-full border-neutral-300 hover:cursor-pointer'>
              <img className='w-6' src={right_icon}></img>
        </button>
      </div>
    </>
  );
}
