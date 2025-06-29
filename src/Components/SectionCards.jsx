import React from 'react'
import Card from './Card';
export default function SectionCards({data}) {



  console.log(data);
  
  return (
    <div>




      {
        data.map((producto, index) => (
          <Card key={index} producto={producto} />
        ))
      }






    </div>
  )
}
