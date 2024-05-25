import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";
import { CompareArrowsOutlined, Favorite } from "@mui/icons-material";

import QuantityBox from "@/components/quantityBox/QuantityBox";
const ProductInfo = ({ item }) => {
  const [activeSize, setActiveSize] = useState(0);

  const isActive = (index) => {
    setActiveSize(index);
  };

  return (
    <div className="w-[60%] flex flex-col gap-3">
      <p className=" flex gap-x-3 items-center">
        <span className=" line-through text-gray-500 text-[17px] font-bold">
          ${item?.oldPrice}
        </span>
        <span className=" text-orange-800 text-[20px] font-bold">
          ${item?.price}
        </span>
      </p>
      <p className=" text-green-400 text-[14px] font-semibold">IN STOCK</p>
      <p className=" text-gray-500">{item?.description}</p>

      {/* quantity select part */}

      <div className=" my-3">
        <div className=" flex gap-x-8">
          <QuantityBox />
          <Button className="bg-blue-400 text-white hover:bg-green-700 hover:text-white rounded-3xl px-8 font-bold">
            Add to cart
            <ShoppingBagIcon className=" text-white text-[12px] ml-3" />
          </Button>
        </div>
        <div className=" my-8 flex gap-x-5">
          <Button
            variant="outline"
            className=" rounded-3xl flex items-center gap-x-1 text-[10px]"
          >
            <span className=" text-[8px]">
              <Favorite />
            </span>
            ADD TO WHISHLIST
          </Button>
          <Button
            variant="outline"
            className=" rounded-3xl flex items-center gap-x-1 text-[10px] "
          >
            <span className=" text-[8px]">
              <CompareArrowsOutlined />
            </span>
            COMPARE
          </Button>
        </div>
        <hr className=" my-4" />

        <div className=" flex items-center gap-x-3 mt-5">
          <span className=" font-semibold text-gray-400 text-[18px]">
            Size / Weight:
          </span>
          <ul className=" flex gap-x-2 items-center">
            <Button
              variant="outline"
              className={` ${
                activeSize === 1 ? " bg-green-300 text-white" : ""
              }`}
              onClick={() => isActive(1)}
            >
              50g
            </Button>
            <Button
              variant="outline"
              className={` ${
                activeSize === 2 ? " bg-green-300 text-white" : ""
              }`}
              onClick={() => isActive(2)}
            >
              100g
            </Button>
            <Button
              variant="outline"
              className={` ${
                activeSize === 3 ? " bg-green-300 text-white" : ""
              }`}
              onClick={() => isActive(3)}
            >
              200g
            </Button>
            <Button
              variant="outline"
              className={` ${
                activeSize === 4 ? " bg-green-300 text-white" : ""
              }`}
              onClick={() => isActive(4)}
            >
              300g
            </Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
