import { Button } from "@/components/ui/button";
import { Rating } from "@mui/material";
import { ShoppingBagIcon } from "lucide-react";
import React, { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = (n) => {
    setQuantity(quantity + n);
  };
  const subQuantity = (n) => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - n);
    }
  };
  return (
    <div className=" p-5">
      <h3 className=" font-bold  text-[25px]">Your Cart</h3>
      <p>There are 3 product in your cart</p>
      <div className=" flex my-5 gap-x-5">
        <div className=" border overflow-hidden rounded-lg  w-[70%] ">
          <div className=" bg-slate-200 flex justify-between items-center h-[8vh] p-3 ">
            <h3 className=" w-[60%]">Product</h3>
            <div className=" flex gap-x-9 w-[42%]">
              <h3>Unit Price</h3>
              <h3>Quantity</h3>
              <h3>SubTotal</h3>
              <h3>Remove</h3>
            </div>
          </div>
          <div className=" w-full py-3 my-2 px-5 flex justify-between items-center border-b">
            <div className="w-[60%] flex items-center gap-x-10">
              <img
                src="https://slurrpfarm.com/cdn/shop/files/00226e5d-df7b-41f5-a5a6-ec0e1d46f150_1500x.png?v=1714048233"
                alt="item"
                className="w-[100px] p-2 border"
              />

              <div className=" w-[60%] space-y-3">
                <h2> Britannia Little Hearts, 75g</h2>
                <Rating
                  name="simple-controlled"
                  defaultValue={3.5}
                  readOnly
                  precision={0.5}
                />
              </div>
            </div>
            <div className="flex gap-x-10 w-[40%]">
              <h2 className="text-[18px] font-bold text-gray-400">$21.6</h2>

              <div className=" flex gap-x-2 items-center select-none">
                <span
                  className=" text-[19px] px-2 rounded-full bg-slate-200 cursor-pointer"
                  onClick={() => {
                    subQuantity(1);
                  }}
                >
                  -
                </span>
                <span className=" text-[15px] ">{quantity}</span>
                <span
                  className=" text-[16px]   px-2 rounded-full  bg-slate-200 cursor-pointer"
                  onClick={() => {
                    addQuantity(1);
                  }}
                >
                  +
                </span>
              </div>
              <h2 className="text-[18px] font-bold text-gray-600">$21.6</h2>
              <h2 className=" text-[25px] ml-3">
                <IoTrashOutline />
              </h2>
            </div>
          </div>
          <div className=" w-full py-3 my-2 px-5 flex justify-between items-center border-b">
            <div className="w-[60%] flex items-center gap-x-10">
              <img
                src="https://slurrpfarm.com/cdn/shop/files/00226e5d-df7b-41f5-a5a6-ec0e1d46f150_1500x.png?v=1714048233"
                alt="item"
                className="w-[100px] p-2 border"
              />

              <div className=" w-[60%] space-y-3">
                <h2> Britannia Little Hearts, 75g</h2>
                <Rating
                  name="simple-controlled"
                  defaultValue={3.5}
                  readOnly
                  precision={0.5}
                />
              </div>
            </div>
            <div className="flex gap-x-10 w-[40%]">
              <h2 className="text-[18px] font-bold text-gray-400">$21.6</h2>

              <div className=" flex gap-x-2 items-center select-none">
                <span
                  className=" text-[19px] px-2 rounded-full bg-slate-200 cursor-pointer"
                  onClick={() => {
                    subQuantity(1);
                  }}
                >
                  -
                </span>
                <span className=" text-[15px] ">{quantity}</span>
                <span
                  className=" text-[16px]   px-2 rounded-full  bg-slate-200 cursor-pointer"
                  onClick={() => {
                    addQuantity(1);
                  }}
                >
                  +
                </span>
              </div>
              <h2 className="text-[18px] font-bold text-gray-600">$21.6</h2>
              <h2 className=" text-[25px] ml-3">
                <IoTrashOutline />
              </h2>
            </div>
          </div>
          <div className=" w-full py-3 my-2 px-5 flex justify-between items-center border-b">
            <div className="w-[60%] flex items-center gap-x-10">
              <img
                src="https://slurrpfarm.com/cdn/shop/files/00226e5d-df7b-41f5-a5a6-ec0e1d46f150_1500x.png?v=1714048233"
                alt="item"
                className="w-[100px] p-2 border"
              />

              <div className=" w-[60%] space-y-3">
                <h2> Britannia Little Hearts, 75g</h2>
                <Rating
                  name="simple-controlled"
                  defaultValue={3.5}
                  readOnly
                  precision={0.5}
                />
              </div>
            </div>
            <div className="flex gap-x-10 w-[40%]">
              <h2 className="text-[18px] font-bold text-gray-400">$21.6</h2>

              <div className=" flex gap-x-2 items-center select-none">
                <span
                  className=" text-[19px] px-2 rounded-full bg-slate-200 cursor-pointer"
                  onClick={() => {
                    subQuantity(1);
                  }}
                >
                  -
                </span>
                <span className=" text-[15px] ">{quantity}</span>
                <span
                  className=" text-[16px]   px-2 rounded-full  bg-slate-200 cursor-pointer"
                  onClick={() => {
                    addQuantity(1);
                  }}
                >
                  +
                </span>
              </div>
              <h2 className="text-[18px] font-bold text-gray-600">$21.6</h2>
              <h2 className=" text-[25px] ml-3">
                <IoTrashOutline />
              </h2>
            </div>
          </div>
          <div className=" w-full py-3 my-2 px-5 flex justify-between items-center border-b">
            <div className="w-[60%] flex items-center gap-x-10">
              <img
                src="https://slurrpfarm.com/cdn/shop/files/00226e5d-df7b-41f5-a5a6-ec0e1d46f150_1500x.png?v=1714048233"
                alt="item"
                className="w-[100px] p-2 border"
              />

              <div className=" w-[60%] space-y-3">
                <h2> Britannia Little Hearts, 75g</h2>
                <Rating
                  name="simple-controlled"
                  defaultValue={3.5}
                  readOnly
                  precision={0.5}
                />
              </div>
            </div>
            <div className="flex gap-x-10 w-[40%]">
              <h2 className="text-[18px] font-bold text-gray-400">$21.6</h2>

              <div className=" flex gap-x-2 items-center select-none">
                <span
                  className=" text-[19px] px-2 rounded-full bg-slate-200 cursor-pointer"
                  onClick={() => {
                    subQuantity(1);
                  }}
                >
                  -
                </span>
                <span className=" text-[15px] ">{quantity}</span>
                <span
                  className=" text-[16px]   px-2 rounded-full  bg-slate-200 cursor-pointer"
                  onClick={() => {
                    addQuantity(1);
                  }}
                >
                  +
                </span>
              </div>
              <h2 className="text-[18px] font-bold text-gray-600">$21.6</h2>
              <h2 className=" text-[25px] ml-3">
                <IoTrashOutline />
              </h2>
            </div>
          </div>
        </div>
        <div className=" w-[20%] mx-auto border h-[40vh]">
          <h2 className=" p-4 border-b font-bold mx-3"> CART TOTALS </h2>
          <ul className=" px-5 my-3 space-y-5">
            <li className=" flex justify-between ">
              <span className=" font-bold text-gray-500">SubTotal</span>
              <span className=" font-bold text-blue-500">$12.5</span>
            </li>
            <li className=" flex justify-between ">
              <span className=" font-bold text-gray-500">Shipping</span>
              <span className=" font-bold text-red-500">Free</span>
            </li>
            <li className=" flex justify-between ">
              <span className=" font-bold text-gray-500">Estimate For</span>
              <span className=" font-bold text-black">India</span>
            </li>
            <li className=" flex justify-between ">
              <span className=" font-bold text-gray-500">Total</span>
              <span className=" font-bold text-blue-500">$141.5</span>
            </li>
            <Button className="bg-purple-800 text-white hover:bg-green-700 hover:text-white w-full px-8 font-bold">
              Add to cart
              <ShoppingBagIcon className=" text-white text-[12px] ml-3" />
            </Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
