"use client"
import { Button } from "./ui/button";
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import { AppDispatch } from "@/store";


const AddToCart = ({value}:any) => {
  const dispatch : AppDispatch= useDispatch();
    const addItemsToCart = () => {
      if(value > 0){
        dispatch(cartActions.addToCart({quantity: value}))
     
      }
      else{
        dispatch(cartActions.addToCart({quantity:1}))
     
      }
       toast.success("Product added successfully")
         
       }
  return (
    <>
      <Button onClick={addItemsToCart}>Add To Cart</Button>
    </>
  )
}

export default AddToCart
