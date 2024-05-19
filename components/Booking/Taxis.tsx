import CarsList from '@/infos/CarsList'
import React, { useState } from 'react'
import Image from 'next/image'

function Cars() {
  const [selectedCar,setSelectedCar]=useState<any>()
  return (
    <div className='mt-3'>
        <h2 className='font-medium text-[14px] '>Select Car</h2>
        <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
            {CarsList.map((item,index)=>(
                <div key={index} className={`m-2 p-2 border-[1px] rounded-md hover:border-gray-800 
                cursor-pointer
                ${index==selectedCar
                  ?'border-gray-800 border-[2px]'
                  :null}`}
                  onClick={()=>setSelectedCar(index)}>
                
                    <Image src={item.image}
                    alt={item.name}
                    width={75}
                    height={90}
                    className='w-full'
                     />
                     <h2 className='text-[12px]'>{item.name}
                     <span className='float-right font-medium text-black'>{item.charges} €</span></h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cars