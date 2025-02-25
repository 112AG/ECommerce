import React from 'react';

function BestSells({ data }) {
  return (
    <div className='h-[250px]  w-[250px] m-1.5 hover:shadow-lg rounded-[18px] border overflow-hidden hover:scale-[104%] transition ease-in'>
      <img src={data} alt="Best Sells for Ever" className='text-center' />
    </div>
  );
}

export default BestSells;
