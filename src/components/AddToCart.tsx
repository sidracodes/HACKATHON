"use client"
import { Button } from "./ui/button";
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";


const AddToCart = () => {
  const dispatch = useDispatch();
    const addItemsToCart = () => {
      dispatch(cartActions.addToCart({quantity:1}))
      toast.success("Product added successfully")
         
       }
  return (
    <>
      <Button onClick={addItemsToCart}>Add To Cart</Button>
    </>
  )
}

export default AddToCart
