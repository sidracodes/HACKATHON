import Image from 'next/image'
 import event1 from '../public/event1.png'
 import event2 from '../public/event2.png'
 import event3 from '../public/event3.png'
 import event4 from '../public/event4.png'
const Promotions = () => {
  return (
    <>
        <section className="my-28">
   
   <h3 className="flex text-blue-700 font-bold  justify-center tracking-wide">PROMOTIONS</h3>
   <h1 className="flex text-4xl font-bold my-10 justify-center tracking-wide">Our Promotions Events</h1>
<div className='flex gap-x-8'>

    <div className='flex flex-col gap-y-5 mt-1'>
    <div> <Image src={event1} alt='promotion' width={500} height={350}/></div>
        <div><Image src={event2} alt='promotion' width={500} height={350}/></div>
   
    </div>
    <div className='flex gap-x-4'>
        <div> <Image src={event3} alt='promotion' width={300} height={250}/></div>
        <div><Image src={event4} alt='promotion' width={300} height={250}/></div>
    </div>

</div>

</section>
    </>
  )
}

export default Promotions
