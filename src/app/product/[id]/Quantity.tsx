'use client'
import { Button } from "@/components/ui/button"
import { useState } from "react"
import AddToCart from "@/components/AddToCart";
import { ShoppingCart } from "lucide-react";
let initialValue =0

const Quantity = ({price}:any) => {
  
    const [value,setValue] = useState(initialValue);
 
  return (
    <>

      <div className='flex gap-x-3 px-3 '> 
      <p className="font-bold">Quantity:</p>
               
  <Button onClick={()=>setValue( value >= 1 ? value - 1 : 0  )}
   className='text-gray-600 hover:bg-gray-200 hover:text-gray-800 flex bg-gray-200 font-bold justify-center items-center h-8 w-8  rounded-full hover:shadow-2xl duration-300 hover:cursor-pointer'>
        -</Button>
        <span className='font-semibold text-gray-600 text-2xl'>{value}</span>
 <Button onClick={()=>setValue(value+1)}
  className=' text-gray-600 hover:bg-gray-200 hover:text-gray-800 flex bg-gray-200 font-bold justify-center items-center h-8 w-8  rounded-full hover:shadow-2xl duration-300 hover:cursor-pointer'>
        +</Button></div>
       <br />
       <div className="flex justify-center items-center mx-3">
        <div className="px-3 py-1 bg-gray-900 flex justify-center items-center text-white">
                  <ShoppingCart />
                 <AddToCart value={value}/>
               
                
                </div>
                <p className="text-2xl font-semibold mx-3">
                  ${price.toFixed(2)}
                </p>
                </div>
    </>
  )
}

export default Quantity
