import Fetch from "@/app/Fetch";

const ProductsList = () => {

  return (
    <>
      <section className="my-28">
        <h3 className="flex text-blue-700 font-bold  justify-center">
          PRODUCTS
        </h3>
        <h1 className="flex text-4xl font-semibold my-10 justify-center">
          Check What We Have
        </h1>

          <Fetch/>
      
      </section>
    </>
  );
};

export default ProductsList;
