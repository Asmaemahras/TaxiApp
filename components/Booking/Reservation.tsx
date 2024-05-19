import React from 'react'
import Cars from './Taxis'
import Cards from './Cards'
import AddressAuto from './AddressAuto'






function Booking() {
 
  return (
    <div className='p-5'>
        <h2 className='text-[20px] font-semibold'>Booking</h2>
        <div className='border-[1px] p-5 rounded-md h-[100%]' >
        <AddressAuto/>
        <Cars/>
        <Cards/>
        <button className='w-full bg-black p-1 rounded-md mt-4'><div className='text-white'>Réserver</div></button>
        </div>
    </div>
  )
}

export default Booking