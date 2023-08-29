import { FC } from "react"
import Image from "next/image";
import Link from "next/link";
import {urlForImage} from '../../sanity/lib/image'
import { Image as IImage} from "sanity";
import AddToCart from "./AddToCart";
type Product ={
  idc: number,
  image: IImage,
  title:string,
  tagline: string,
  price: number,
  category: {
    name: string
    }
}
const ProductCard : FC<Product>= async({image,title,price,category,idc,tagline}) => {

  return (
    <>
        <div className="py-6"> 
          
        <Link href={`product/${idc}`}>
        <Image src={urlForImage(image).url()} alt="p1" width={325} height={400}/>
  </Link>
        
        
       
     <h1 className="text-lg font-semibold tracking-wide mt-5">{title}</h1>
   
     
     <h1 className="text-2xl font-semibold">${price}</h1>
     <p className=" font-semibold mt-4">
     <span className="text-1xl font-semibold text-gray-400 capitalize">
        {tagline}</span></p>
     <p className=" font-semibold mt-4">Product Id:
     <span className="text-base font-normal">  {idc}</span></p>
     <p className="font-semibold mb-4">Category: 
     <span className="text-base font-normal">  {category.name}</span></p>
   
 
         
     <AddToCart/>
    </div> 
    </>

  )
}

export default ProductCard
