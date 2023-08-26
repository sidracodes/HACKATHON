import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import heroimage from "../public/heroimage.webp";
import featuredimage1 from '../public/Featured1.webp'
import featuredimage2 from '../public/Featured2.webp'
import featuredimage3 from '../public/Featured3.webp'
import featuredimage4 from '../public/Featured4.webp'
import Link from "next/link";
const Herosection = () => {
  return (
    <>
      <section className="flex px-6">
        <div className="flex-1 flex-col space-y-6">
       
       <div className="mt-24 ">
       <Badge className="bg-blue-100 rounded-sm text-blue-700 text-1xl font-bold py-3 px-6 ">
            Sale 70%
          </Badge></div>   
         <div> <h1 className="tracking-wider scroll-m-20 text-6xl font-bold  lg:text-6xl mt-3">
            An Industrial <br /> Take on Streetwear
          </h1></div>
         <div> <p className="leading-7 [&:not(:first-child)]:mt-6 tracking-wide">
            Anyone can beat you but no one can <br /> beat your outfit as long as you
            wear <br /> Dine outfits.
          </p></div>
        <div>  
          <Link href={'./products'}>
          <Button className="bg-black hover:bg-black px-6 h-12 py-10 text-1xl rounded-none">
            <ShoppingCart className="mr-4" />
            Start <br /> Shopping
          </Button></Link>
         
          </div>
          <div className="flex gap-x-8 pt-6">
          <Image src={featuredimage1} alt="featuredimage"/>
          <Image src={featuredimage2} alt="featuredimage"/>
          <Image src={featuredimage3} alt="featuredimage"/>
          <Image src={featuredimage4} alt="featuredimage"/>
         
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute z-10">
          <Image src={heroimage} alt="heroimage"/>
         
          </div>
           <div className="bg-orange-100 rounded-full  w-full absolute top-10 bottom-10 "></div>
        </div>
      </section>
    </>
  );
};

export default Herosection;
