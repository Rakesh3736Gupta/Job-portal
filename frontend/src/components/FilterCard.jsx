// import React, { useEffect, useState } from "react";
// import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
// import { Label } from "./ui/label";
// import { useDispatch } from "react-redux";
// import { setSearchedQuery } from "@/redux/jobSlice";

// const fitlerData = [
//   {
//     fitlerType: "Location",
//     array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
//   },
//   {
//     fitlerType: "Industry",
//     array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
//   },
//   {
//     fitlerType: "Salary",
//     array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
//   },
// ];

// const FilterCard = () => {
//   const [selectedValue, setSelectedValue] = useState("");
//   const dispatch = useDispatch();
//   const changeHandler = (value) => {
//     setSelectedValue(value);
//   };
//   useEffect(() => {
//     dispatch(setSearchedQuery(selectedValue));
//   }, [selectedValue]);
//   return (
//     <div className="w-full bg-white p-3 rounded-md">
//       <h1 className="font-bold text-lg">Filter Jobs</h1>
//       <hr className="mt-3" />
//       <RadioGroup value={selectedValue} onValueChange={changeHandler}>
//         {fitlerData.map((data, index) => (
//           <div>
//             <h1 className="font-bold text-lg">{data.fitlerType}</h1>
//             {data.array.map((item, idx) => {
//               const itemId = `id${index}-${idx}`;
//               return (
//                 <div className="flex items-center space-x-2 my-2">
//                   <RadioGroupItem value={item} id={itemId} />
//                   <Label htmlFor={itemId}>{item}</Label>
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </RadioGroup>
//     </div>
//   );
// };

// export default FilterCard;
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Adjusted import
import { motion } from "framer-motion";
const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [openFilters, setOpenFilters] = useState({
    Location: false,
    Industry: false,
    Salary: false,
  });
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue, dispatch]);

  const toggleFilter = (filterType) => {
    setOpenFilters((prevState) => ({
      ...prevState,
      [filterType]: !prevState[filterType],
    }));
  };

  return (
    <>
      <div className=" mt-16">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white p-4 rounded-md shadow-md"
        >
          <h1 className="font-bold text-lg mb-4">Filter Jobs</h1>
          <hr className="mb-4" />

          <RadioGroup value={selectedValue} onValueChange={changeHandler}>
            {filterData.map((data, index) => (
              <div key={index} className="mb-5">
                <div
                  className="flex justify-between items-center cursor-pointer lg:cursor-auto"
                  onClick={() => toggleFilter(data.filterType)}
                >
                  <h1 className="font-bold text-md lg:text-lg">
                    {data.filterType}
                  </h1>
                  <span className="lg:hidden">
                    {openFilters[data.filterType] ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </div>

                <div
                  className={`lg:block ${
                    openFilters[data.filterType] ? "block" : "hidden"
                  }`}
                >
                  {data.array.map((item, idx) => {
                    const itemId = `id${index}-${idx}`;
                    return (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 my-2"
                      >
                        <RadioGroupItem value={item} id={itemId} />
                        <Label htmlFor={itemId}>{item}</Label>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </RadioGroup>
        </motion.div>
      </div>
    </>
  );
};

export default FilterCard;
