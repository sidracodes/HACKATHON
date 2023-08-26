import { client } from  "../../sanity/lib/sanityClient"
import { Image as IImage} from "sanity";
import ProductCard from "@/components/ProductCard";

export interface IProduct {
  idc: number,
  image: IImage,
  title:string,
  price: number,
  tagline: string,
  category: {
    name: string
    }
}
export const getProductsData = async() => {
const res=await client.fetch(`
*[_type=='product']{
  title,
idc,
price,
image,
tagline,
category -> {
  name
}}
`);
return res
}

const Fetch = async() => {
 const data : IProduct[] = await getProductsData()
  return (
    <div className="flex gap-x-5 p-10">
          {data.map((currentElement, currentIndex) => {
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
          })}
    </div>
  )
}

export default Fetch





