import React from "react";

function SeasonClothList({ data }) {
  if (!data) {
    <div>Loading! ...</div>;
  }
  return (
    <div className="min-w-[235px] p-2 flex items-center flex-col ">
        <img src={data.image} alt="SeasonSells" className="rounded-[2px] w-fit h-[280px] object-center object-cover border"/>
      <div className="w-full flex justify-between">
      <span>{data.name}</span>
      <span>Rs {data.price}</span>
      </div>
      <div className="h-[1px] w-full bg-black "></div>
      
    </div>
  );
}

export default SeasonClothList;
