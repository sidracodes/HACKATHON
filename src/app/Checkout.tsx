"use client"
import { Button } from "@/components/ui/button"
import getStripePromise from "./lib/stripe"
import { client } from  "../../sanity/lib/sanityClient"
import { ShoppingCartIcon } from "lucide-react"
import Items from "@/components/Items"

  export const getProductsData = async() => {
    const res=await client.fetch(`
    *[_type=='product']{
    price,
    product,
    name,
    quantity
}`);
    return res
    }
const  handleCheckout = async() => {
    const productdata = await getProductsData()
  const stripe =await getStripePromise()
const response = await fetch("/api/stripe-session/",{
  method: "POST",
  headers:{"Content-Type" :"application/json"},
  cache: "no-cache",
  body: JSON.stringify(productdata)
})
const data = await response.json()
if(data.session){
  stripe?.redirectToCheckout({sessionId: data.session.id})
}
  }
const Checkout = async() => {

  return (
    <>
    
   <Items/>  
       <Button onClick={handleCheckout} className="
       h-12 w-12 
       rounded-full bg-gray-200 flex justify-center items-center
       text-black hover:bg-gray-200"> 
       <ShoppingCartIcon/>
       </Button>
    </>
  )
}

export default Checkout
export {handleCheckout}
