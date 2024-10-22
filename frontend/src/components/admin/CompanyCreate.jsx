// import React, { useState } from "react";
// import Navbar from "../shared/Navbar";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { COMPANY_API_END_POINT } from "@/utils/constant";
// import { toast } from "sonner";
// import { useDispatch } from "react-redux";
// import { setSingleCompany } from "@/redux/companySlice";

// const CompanyCreate = () => {
//   const navigate = useNavigate();
//   const [companyName, setCompanyName] = useState();
//   const dispatch = useDispatch();
//   const registerNewCompany = async () => {
//     try {
//       const res = await axios.post(
//         `${COMPANY_API_END_POINT}/register`,
//         { companyName },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       if (res?.data?.success) {
//         dispatch(setSingleCompany(res.data.company));
//         toast.success(res.data.message);
//         const companyId = res?.data?.company?._id;
//         navigate(`/admin/companies/${companyId}`);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-4xl mx-auto mt-20">
//         <div className="my-10">
//           <h1 className="font-bold text-2xl">Your Company Name</h1>
//           <p className="text-gray-500">
//             What would you like to give your company name? you can change this
//             later.
//           </p>
//         </div>

//         <Label>Company Name</Label>
//         <Input
//           type="text"
//           className="my-2"
//           placeholder="JobHunt, Microsoft etc."
//           onChange={(e) => setCompanyName(e.target.value)}
//         />
//         <div className="flex items-center gap-2 my-10">
//           <Button
//             variant="outline"
//             onClick={() => navigate("/admin/companies")}
//           >
//             Cancel
//           </Button>
//           <Button onClick={registerNewCompany}>Continue</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyCreate;

// import React, { useState } from "react";
// import Navbar from "../shared/Navbar";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { COMPANY_API_END_POINT } from "@/utils/constant";
// import { toast } from "sonner";
// import { useDispatch } from "react-redux";
// import { setSingleCompany } from "@/redux/companySlice";
// import { motion } from "framer-motion";

// const CompanyCreate = () => {
//   const navigate = useNavigate();
//   const [companyName, setCompanyName] = useState("");
//   const dispatch = useDispatch();

//   const registerNewCompany = async () => {
//     try {
//       const res = await axios.post(
//         `${COMPANY_API_END_POINT}/register`,
//         { companyName },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       if (res?.data?.success) {
//         dispatch(setSingleCompany(res.data.company));
//         toast.success(res.data.message);
//         const companyId = res?.data?.company?._id;
//         navigate(`/admin/companies/${companyId}`);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Error creating company. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 ">
//       <Navbar />
//       <motion.div
//         initial={{ opacity: 0, y: -100 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 100 }}
//         transition={{ duration: 0.8 }}
//         className=" pt-20 gap-64"
//       >
//         <div className="max-w-4xl mx-auto p-6 md:p-8  bg-white shadow-md rounded-lg  mt-10 h-[400px] gap-10">
//           <div className="mb-6 ">
//             <h1 className="font-bold text-2xl md:text-3xl">
//               Your Company Name
//             </h1>
//             <p className="text-gray-500">
//               What would you like to give your company name? You can change this
//               later.
//             </p>
//           </div>

//           <div className=" ">
//             <Label>Company Name</Label>
//             <Input
//               type="text"
//               className="my-2 w-full"
//               placeholder="JobHunt, Microsoft, etc."
//               onChange={(e) => setCompanyName(e.target.value)}
//             />
//           </div>

//           <div className="flex flex-col md:flex-row items-center gap-2 my-6 w-20">
//             <Button
//               variant="outline"
//               onClick={() => navigate("/admin/companies")}
//               className="flex-1"
//             >
//               Cancel
//             </Button>
//             <div>
//               <Button onClick={registerNewCompany} className="flex-1">
//                 Continue
//               </Button>
//             </div>
//             {/* <Button onClick={registerNewCompany} className="flex-1">
//               Continue
//             </Button> */}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default CompanyCreate;

import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";
import { motion } from "framer-motion";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    if (!companyName.trim()) {
      toast.error("Company name cannot be empty.");
      return;
    }

    // Optional: Check if companyName is too short
    if (companyName.length < 3) {
      toast.error("Company name must be at least 3 characters long.");
      return;
    }

    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.error("Error details:", error.response?.data); // Log error details
      toast.error(
        error.response?.data?.message ||
          "Error creating company. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="pt-20 gap-64"
      >
        <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white shadow-md rounded-lg mt-10 h-[400px] gap-10">
          <div className="mb-6 ">
            <h1 className="font-bold text-2xl md:text-3xl">
              Your Company Name
            </h1>
            <p className="text-gray-500">
              What would you like to give your company name? You can change this
              later.
            </p>
          </div>

          <div>
            <Label>Company Name</Label>
            <Input
              type="text"
              className="my-2 w-full"
              placeholder="JobHunt, Microsoft, etc."
              value={companyName} // Controlled input
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 my-6 w-20">
            <Button
              variant="outline"
              onClick={() => navigate("/admin/companies")}
              className="flex-1"
            >
              Cancel
            </Button>
            <div>
              <Button onClick={registerNewCompany} className="flex-1">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyCreate;
