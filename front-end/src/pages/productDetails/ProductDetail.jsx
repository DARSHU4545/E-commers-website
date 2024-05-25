import Rating from "@mui/material/Rating";
import ProductZoom from "../home/ProductZoom";
import ProductInfo from "../home/ProductInfo";
import ProductReviews from "./ProductReviews";
import RelatedProducts from "./RelatedProducts";

const ProductDetail = () => {
  return (
    <>
      <div className=" w-full bg-slate-200 p-10 h-auto ">
        <div className=" bg-white w-[80%] m-auto p-10">
          <h2 className=" text-[25px] font-bold text-gray-800 my-3">
            Britannia Little Hearts, 75g
          </h2>
          <div className=" flex items-center gap-x-3">
            <span className=" border-r border-gray-400 px-3">Brand: food</span>
            <span className=" flex items-center border-r border-gray-400 px-3">
              <Rating
                name="simple-controlled"
                defaultValue={3.5}
                readOnly
                precision={0.5}
              />
              1 review
            </span>
            <span>SKU: Z4GY8I</span>
          </div>
          <hr className=" my-8" />
          <div>
            <div className=" flex gap-x-8">
              <ProductZoom />
              <ProductInfo />
            </div>
            <ProductReviews />
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <RelatedProducts tittle="Realted products" />
        <RelatedProducts tittle="recently viewed Product" />
      </div>
    </>
  );
};

export default ProductDetail;
