import Image from "next/image";
import { Button } from "./ui/button";
import p4 from "../public/p4.png";
import Link from "next/link";

const Newsletter = () => {
  return (
    <>
      <section className="my-28 mx-24">
        <h1 className="flex text-6xl font-bold my-3 text-center">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
        <div className="flex gap-x-10 mt-28 bg-gray-50">
          <div className="w-3/12">
            <div>
              <h2 className="flex text-[20px] my-4 font-semibold ">
                Using Good Quality Materials
              </h2>
              <h3 className="flex my-4">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </h3>
            </div>
            <div>
              <h2 className="flex text-[20px] font-semibold my-4">
                Modern Fashion Design
              </h2>
              <h3 className="flex my-4">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </h3>
            </div>
          </div>
          <div className="w-3/12">
            <div>
              <h2 className="flex text-[20px] font-semibold my-4">
                100% Handmade Products
              </h2>
              <h3 className="flex my-4">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </h3>
            </div>
            <div>
              <h2 className="flex text-[20px] font-semibold my-4">
                Discount for Bulk Orders
              </h2>
              <h3 className="flex my-4">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </h3>
            </div>
          </div>
          <div className="py-2 w-4/12">
            <Image src={p4} alt="product image" />
          </div>
          <div className="w-3/12">
            <h3 className="flex my-4 tracking-widest">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </h3>
            <div>
            <Link href={'/products'}>   <Button className="bg-black hover:bg-black px-6 h-12 py-10 text-1xl rounded-none">
                See All <br /> Product
              </Button></Link>
            </div>
          </div>
        </div>

        <h1 className="flex text-4xl font-bold mt-36 mb-5 justify-center tracking-wide">
          Subscribe Our Newsletter
        </h1>
        <h3 className="flex text-gray-700 font-light  justify-center tracking-wide">
          Get the latest information and promo offers directly
        </h3>
        <div className="flex gap-x-5 items-center justify-center mt-10">
          <div className="px-2 w-4/12 flex justify-center items-center rounded-sm h-12 border-solid border-2 border-gray-300">
            <input type="email" value={"Input email address"} />
          </div>

          <div>
        
            <Button className="bg-black hover:bg-black px-6 h-12 py-4 text-1xl rounded-none">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
