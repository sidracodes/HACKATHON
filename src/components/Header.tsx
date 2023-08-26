import logo from "@/public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import {Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Checkout from "@/app/Checkout";

const Header = () => {
  return (
    <>
     <header>
     <div className="flex justify-around py-8 items-center gap-x-4">
      <Link href={'./'}> <Image src={logo}  alt="logo" />
     </Link>
      <ul className="flex gap-x-16">
        <li> <Link href={'/female'}>Female</Link> </li>
        <li> <Link href={'/male'}>Male</Link> </li>
        <li> <Link href={'/kids'}>Kids</Link> </li>
        <li> <Link href={'/products'}>All Products</Link> </li>
         
      </ul>
      <div className="px-2 flex justify-center items-center rounded-sm h-7 border-solid border-2 border-gray-300">
        <div className="flex justify-center items-center">
           <Search className="text-gray-400 h-4"/>
      </div>
     <Input type="text" placeholder="What you looking for" className="h-5 w-200 border-none"/>
     
      </div>
      
      <div>
        <Checkout/>
        </div>
      </div>
     </header>
     </>
  );
};

export default Header;
