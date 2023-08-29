"use client"
import ProductCard from "@/components/ProductCard";
import { client } from  "../../sanity/lib/sanityClient"
import { Image as IImage} from "sanity";
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
  const getProducts = async() => {
  
    const query =`
    *[_type=='product']{
      title,
    idc,
    price,
    image,
    tagline,
    category -> {
      name
    }}
    `
    const data=await client.fetch(query);
    return data
  }
  const SwipperSlider = async() => {
   const products:Product[] = await getProducts();
    return (
    
      <>
  
        <div className="flex gap-x-5 p-10">
         {
          products.map((currentElement:Product, currentIndex:number) => {
            return (
             
              <ProductCard
                key={currentIndex}
                idc={currentElement.idc}
                image={currentElement.image}
                title={currentElement.title}
                tagline={currentElement.tagline}
                price={currentElement.price}
                category={currentElement.category}
              />
              
            );
          })
         }
         </div>
     
      </>
  
    )
  }
  
  export default SwipperSlider
  