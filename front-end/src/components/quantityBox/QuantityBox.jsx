import React, { useState } from "react";

const QuantityBox = () => {
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
    <div className=" flex gap-x-6 items-center select-none">
      <span
        className=" text-[25px] px-4 rounded-full bg-slate-200 cursor-pointer"
        onClick={() => {
          subQuantity(1);
        }}
      >
        -
      </span>
      <span className=" text-[20px] ">{quantity}</span>
      <span
        className=" text-[25px]   px-3 rounded-full  bg-slate-200 cursor-pointer"
        onClick={() => {
          addQuantity(1);
        }}
      >
        +
      </span>
    </div>
  );
};

export default QuantityBox;
