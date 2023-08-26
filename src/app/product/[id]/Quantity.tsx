'use client'
import { Button } from "@/components/ui/button"
import { useState } from "react"
let initialValue =0

const Quantity = () => {
    const [value,setValue] = useState(initialValue);
 
  return (
    <>
      <div className='flex gap-x-1 '> 
  <Button onClick={()=>setValue( value >= 1 ? value - 1 : 0  )}
   className='text-gray-600 hover:bg-gray-200 hover:text-gray-800 flex bg-gray-200 font-bold justify-center items-center h-8 w-8  rounded-full hover:shadow-2xl duration-300 hover:cursor-pointer'>
        -</Button>
        <span className='font-semibold text-gray-600 text-2xl'>{value}</span>
 <Button onClick={()=>setValue(value+1)}
  className=' text-gray-600 hover:bg-gray-200 hover:text-gray-800 flex bg-gray-200 font-bold justify-center items-center h-8 w-8  rounded-full hover:shadow-2xl duration-300 hover:cursor-pointer'>
        +</Button></div>
    </>
  )
}

export default Quantity
