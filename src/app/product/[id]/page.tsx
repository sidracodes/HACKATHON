import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Quantity from "./Quantity";
import { client } from  "../../../../sanity/lib/sanityClient"
import { Image as IImage} from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import AddToCart from "@/components/AddToCart";

export interface IProduct {
    idc: number,
    image: IImage,
    title:string,
    tagline:string,
    price: number,
    category: {
      name: string
      }
  }
    
const getProductDetails =async (id: number) => {
  const str = id
  const res=await client.fetch(
    `
    *[_type == "product" && idc == ${str}]
    `);
 const data: IProduct[] = res

  return data
};

export default async function Page({ params }: { params: { id: number } }) {
  const result =await getProductDetails(params.id);
  const sizes = ["XS", "S", "M", "L", "XL"];
  return (
    <>
    <div className="flex flex-col gap-y-28">
    <div className=" mt-16 py-10">
      {result.map((currentElement, currentIndex) => {
        return (
          <div
            key={currentIndex}
            className="flex justify-center flex-wrap gap-x-8"
          >
            <div>
              <Image
                src={urlForImage(currentElement.image).url()}
                alt="p1" width={325} height={400}
              />
             
            </div>

            <div className="flex flex-col justify-start items-start mt-20 ml-10 tracking-wide">
              {/* website must have one h1 tag -- good practise  */}
              <h1 className="text-3xl">{currentElement.title}</h1>
              <p className="text-2xl font-semibold text-gray-400 capitalize">
                {currentElement.tagline}
              </p>
              <div className="flex flex-col ">
                <p className="font-bold mt-10">SELECT SIZE</p>

                <div className="flex gap-x-6">
                  {sizes.map((currentElement, currentIndex) => {
                    return (
                      <div key={currentIndex} className="flex text-gray-500 mt-4 font-bold justify-center items-center h-10 w-10 bg-white rounded-full hover:shadow-2xl duration-300 hover:cursor-pointer">
                        <span key={currentIndex}>{currentElement}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex mt-10 gap-x-10">
                <p className="font-bold">Quantity:</p>
                <Quantity />
              </div>

              <div className="flex gap-x-4 justify-center items-center mt-16">
                <div className="px-3 py-1 bg-gray-900 flex justify-center items-center text-white">
                  <ShoppingCart />
                 <AddToCart/>
                
                </div>

                <p className="text-2xl font-semibold">
                  ${currentElement.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    
    <div className="mb-40 mx-40 tracking-widest text">
      <h5 className="font-bold -3xl">Product Information</h5>

      <hr className="mt-10 mb-6"/>


      <div className=" flex gap-x-48">
        <div>PRODUCT DETAILS</div>
        <div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
      <br />
      <div className="flex gap-x-40">
        <div>PRODUCT CARE</div>
        <div>
          <ul>
            <li>
Hand wash using cold water.</li>
            <li>Do not using bleach.</li>
            <li>Hang it to dry.</li>
          </ul>
        </div>
      </div>


      </div>
      </div>
      </>
   



  );
}
