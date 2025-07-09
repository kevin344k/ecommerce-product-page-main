import React from 'react'
import Card from './Card';
export default function SectionCards({data,titulo}) {



  console.log(data);
  
  return (
    <>
<p className='font-fm-public-sans font-bold text-xl text-center mt-20 lg:text-left lg:text-3xl'>{titulo}</p>

     <div id={`section-${titulo}`} className='flex  overflow-x-scroll scroll-smooth gap-4 p-4 w-full lg:overflow-x-hidden lg:flex-wrap' >
     <div className='flex  gap-6 lg:justify-between lg:items-center lg:flex-wrap'>
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
