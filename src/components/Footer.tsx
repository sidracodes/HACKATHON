import Image from "next/image";
import logo from "@/public/Logo.webp";
import { TwitterIcon,FacebookIcon,LinkedinIcon} from "lucide-react";

const Footer = () => {
  return (
    <>
  <footer>
  <div>
     <div>
       <div className="flex  justify-around">
        <div>
          <Image src={logo} alt="logo" height={30} className="py-2"/>
          <p className="py-10">Small, artisan label that offers a 
           <br /> thoughtfully curated collection of high 
          <br /> quality everyday essentials made.</p>
          <div className="flex items-center gap-x-4">
            <div className="bg-gray-200  p-2 rounded-md"  ><TwitterIcon className=" fill-black"/></div>
            <div className="bg-gray-200 p-2 rounded-md"> <FacebookIcon className=" fill-black"/></div>
           
          <div className="bg-gray-200 p-2 rounded-md">  <LinkedinIcon className=" fill-black"/></div>
          </div>
        </div>
        <div className="flex justify-around gap-x-28">
          <ul className="space-y-6">
            <li className="font-bold text-gray-700 text-2xl">Company</li>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
          <ul className="space-y-6">
            <li className="font-bold text-gray-700 text-2xl">Support
</li>
            <li>Carrer
</li>
            <li>24h Service
</li>
<li>Quick Chat</li>
          </ul>
          <ul className="space-y-6">
            <li className="font-bold text-gray-700 text-2xl">Contact
</li>
<li>Whatsapp
</li>
<li>Support 24h</li>
          </ul>
        </div>
      </div>
   </div>
   <div className="pt-28">
      <hr />
    
    </div> 
    <div className="flex justify-around items-center pt-6">
      <div>
        <p>
        Copyright © 2022 Dine Market
       
        </p>
      </div>
      <div className="flex">
         <p>Design by. 
           </p> 
           <p className="font-bold text-lg"> Weird Design Studio</p></div>
      <div className="flex">
        <p>Code by. </p>
        <p className="font-bold text-lg">shabrina12 on github</p></div>
    </div>
    </div>
  </footer>
        </>
  );
};

export default Footer;
