import React, { useState } from 'react';
import { filterOptions } from '../../../Utils/Data';
import { useSelector } from 'react-redux';

function Dashboard() {
  const toggle = useSelector((state) => state.theme.toggle);

  // Step 1: Add state for selected category
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Step 2: Modify the filterData function to return data based on selected category
  function filterData(category) {
    return filterOptions[category] || filterOptions.all;
  }

  // Step 3: Handle the button click to set the selected category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = filterData(selectedCategory);

  return (
    <div className={`w-full ${toggle ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <nav>
        <ul className='w-full flex justify-center gap-5'>
          <li
            className={`${
              toggle
                ? 'bg-white text-black hover:bg-black hover:text-white hover:border-2 border-white'
                : 'bg-white border-2 border-[#565050] hover:bg-[#565050] hover:text-white hover:shadow-md'
            } transition ease-in-out font-bold rounded-full h-[32px] w-[78px] flex items-center justify-center my-8`}>
            <button onClick={() => handleCategoryClick('all')}>All</button>
          </li>
          <li
            className={`${
              toggle
                ? 'bg-white text-black hover:bg-black hover:text-white hover:border-2 border-white'
                : 'bg-white border-2 border-[#565050] hover:bg-[#565050] hover:text-white hover:shadow-md'
            } transition ease-in-out font-bold rounded-full h-[32px] w-[78px] flex items-center justify-center my-8`}>
            <button onClick={() => handleCategoryClick('men')}>Men</button>
          </li>
          <li
            className={`${
              toggle
                ? 'bg-white text-black hover:bg-black hover:text-white hover:border-2 border-white'
                : 'bg-white border-2 border-[#565050] hover:bg-[#565050] hover:text-white hover:shadow-md'
            } transition ease-in-out font-bold rounded-full h-[32px] w-[78px] flex items-center justify-center my-8`}>
            <button onClick={() => handleCategoryClick('women')}>Women</button>
          </li>
          <li
            className={`${
              toggle
                ? 'bg-white text-black hover:bg-black hover:text-white hover:border-2 border-white'
                : 'bg-white border-2 border-[#565050] hover:bg-[#565050] hover:text-white hover:shadow-md'
            } transition ease-in-out font-bold rounded-full h-[32px] w-[78px] flex items-center justify-center my-8`}>
            <button onClick={() => handleCategoryClick('babies')}>Babies</button>
          </li>
        </ul>
      </nav>

      {/* Step 4: Render the filtered data */}
      <div className='w-full flex flex-wrap justify-center gap-4'>
        {filteredData.map((item, index) => (
          <div key={index} className='w-48 border p-4 rounded-lg'>
            <img src={item.image} alt={item.brand} className='w-full h-32 object-cover rounded-md' />
            <h3 className='font-bold mt-2'>{item.brand}</h3>
            <p className='text-sm'>{item.description}</p>
            <p className='mt-2 font-bold'>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;


// import React from 'react'
// import {filterOptions} from '../../../Utils/Data'
// import { useSelector } from 'react-redux';

// function Dashboard() {
//   const toggle = useSelector((state) => state.theme.toggle);

//   const [selectedCategory, setSelectedCategory] = useState('all');

//   function filterData(category) {
//     return filterOptions[category] || filterOptions.all;
//   }

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const filteredData = filterData(selectedCategory);
  
//   return (
//     <div className={`w-full ${toggle? 'bg-black text-white':'bg-white text-black'}`}>
//       <nav>
//         <ul className='w-full flex justify-center gap-5'>
//           <li className={`${toggle? 'bg-white text-black hover:bg-black hover:text-white hover:border-2 border-white':'bg-white border-2 border-[#565050] hover:bg-[#565050] hover:text-white hover:shadow-md'} transition ease-in-out font-bold  rounded-full h-[32px] w-[78px] flex items-center justify-center my-8`}><button onClick={() => handleCategoryClick('all')}>All</button></li>
//           <li className={`${toggle? 'bg-white text-black hover:bg-black hover:text-white hover:border-2 border-white':'bg-white border-2 border-[#565050] hover:bg-[#565050] hover:text-white hover:shadow-md'} transition ease-in-out font-bold  rounded-full h-[32px] w-[78px] flex items-center justify-center my-8`}><button onClick={() => handleCategoryClick('men')}>Men</button></li>
//           <li className={`${toggle? 'bg-white text-black hover:bg-black hover:text-white hover:border-2 border-white':'bg-white border-2 border-[#565050] hover:bg-[#565050] hover:text-white hover:shadow-md'} transition ease-in-out font-bold  rounded-full h-[32px] w-[78px] flex items-center justify-center my-8`}><button onClick={() => handleCategoryClick('women')}>Women</button></li>
//           <li className={`${toggle? 'bg-white text-black hover:bg-black hover:text-white hover:border-2 border-white':'bg-white border-2 border-[#565050] hover:bg-[#565050] hover:text-white hover:shadow-md'} transition ease-in-out font-bold  rounded-full h-[32px] w-[78px] flex items-center justify-center my-8`}><button onClick={() => handleCategoryClick('babies')}>Babies</button></li>
//         </ul>
//       </nav>
//       <div></div>
//     </div>
//   )
// }

// export default Dashboard