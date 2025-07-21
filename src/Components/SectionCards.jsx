import React from 'react'
import Card from './Card';
export default function SectionCards({data,titulo}) {



  console.log(data);
  
  return (
    <>
<div className='flex justify-between items-center mb-4 w-full'>
  <p className='font-fm-public-sans font-bold text-xl text-center mt-20 lg:text-left lg:text-3xl '>{titulo}</p>
  <button className='rounded-sm bg-fm-Pale-orange p-2 text-fm-Orange' >Ver todo...</button>
</div>

     <div id={`section-${titulo}`} className='flex snap-x snap-mandatory overflow-x-scroll snap-center scroll-snap-x scroll-smooth gap-4 p-4 w-full ' >
     <div className='flex  gap-6 '>
        {
        data.map((producto, index) => (
          <Card key={index} producto={producto} />
        ))
      }
     </div>
     </div>
    </>
  )
}
