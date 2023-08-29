import ProductCard from "@/components/ProductCard";
import { client } from  "../../../sanity/lib/sanityClient"
import { Image as IImage} from "sanity";
export interface IProduct {
    idc: number,
    image: IImage,
    title:string,
    tagline: string,
    price: number,
    category: {
      name: string
      }
  }

const getProductsByCategory = async (category: string) => {
  const str = category
  const res=await client.fetch(
    `
    *[_type == "product" && category -> name == "${str}"]{
      title,
      idc,
      price,
      image,
      tagline,
      category -> {
        name
      }
    }
    `);
 
const data: IProduct[] = res;
return data
};
export default async function Page({ params }: { params: { category: string } }) {
    const data=await client.fetch(`
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
    const products =await getProductsByCategory(params.category);
   
  return (
    <>
      <div className="flex justify-evenly mt-16 py-10 flex-wrap">
        {products.length > 0
          ?( products.map((currentElement, currentIndex) => {
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
            }))
          : (data.map((currentElement:IProduct, currentIndex:number) => {
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
            }))}
      </div>
    </>
  );
}
