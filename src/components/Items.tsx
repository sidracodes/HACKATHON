import { useSelector} from "react-redux";
import { RootState } from "@/store";
const Items = () => {
    const cartValue = useSelector((state: RootState)=>state.cart.totalQuantity)
 
  return (
    <>
       <span className="absolute ml-3 rounded-full
     bg-red-500 text-white text-sm h-4 w-4 text-center" >{cartValue}</span>
     
    </>
  )
}

export default Items
