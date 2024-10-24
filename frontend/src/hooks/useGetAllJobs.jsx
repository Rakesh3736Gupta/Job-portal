// import { setAllJobs } from "@/redux/jobSlice";
// import { JOB_API_END_POINT } from "@/utils/constant";
// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// // const useGetAllJobs = () => {
// //   const dispatch = useDispatch();
// //   const { searchedQuery } = useSelector((store) => store.job);
// //   useEffect(() => {
// //     const fetchAllJobs = async () => {
// //       try {
// //         const res = await axios.get(
// //           `${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,
// //           { withCredentials: true }
// //         );
// //         if (res.data.success) {
// //           dispatch(setAllJobs(res.data.jobs));
// //         }
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     };

// //     fetchAllJobs();
// //   }, []);
// // };

// // const useGetAllJobs = () => {
// //   const dispatch = useDispatch();
// //   const { searchedQuery } = useSelector((store) => store.job);

// //   useEffect(() => {
// //     const fetchAllJobs = async () => {
// //       try {
// //         const res = await axios.get(
// //           `${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,
// //           { withCredentials: true }
// //         );
// //         if (res.data.success) {
// //           dispatch(setAllJobs(res.data.jobs));
// //         } else {
// //           console.log(res.data.message); // Display message for debugging
// //         }
// //       } catch (error) {
// //         if (error.response && error.response.status === 401) {
// //           console.log("User not authenticated. Redirect to login.");
// //           // Handle redirection to login page or display an error message
// //         } else {
// //           console.log(error);
// //         }
// //       }
// //     };

// //     fetchAllJobs();
// //   }, [searchedQuery, dispatch]);
// // };

// const useGetAllJobs = () => {
//   const dispatch = useDispatch();
//   const { searchedQuery } = useSelector((store) => store.job);

//   useEffect(() => {
//     const fetchAllJobs = async () => {
//       try {
//         const res = await axios.get(
//           `${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,
//           { withCredentials: true }
//         );
//         if (res.data.success) {
//           dispatch(setAllJobs(res.data.jobs));
//         } else {
//           console.log(res.data.message); // Log for better debugging
//         }
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           console.log("User not authenticated. Redirect to login.");
//           // Handle redirection to login page
//         } else {
//           console.log(error);
//         }
//       }
//     };

//     fetchAllJobs();
//   }, [searchedQuery, dispatch]);
// };

// export default useGetAllJobs;

import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// const useGetAllJobs = () => {
//   const dispatch = useDispatch();
//   const { searchedQuery } = useSelector((store) => store.job);

// useEffect(() => {
//   const fetchAllJobs = async () => {
//     try {
//       const token = localStorage.getItem("authToken"); // Retrieve the token

//       const res = await axios.get(
//         `${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Add the token to the headers
//           },
//           withCredentials: true,
//         }
//       );

//       if (res.data.success) {
//         dispatch(setAllJobs(res.data.jobs));
//       }
//     } catch (error) {
//       console.error("Error fetching jobs:", error); // Log the error for debugging
//     }
//   };

//   if (searchedQuery) {
//     // Ensure fetch is called only if there's a query
//     fetchAllJobs();
//   }
// }, [searchedQuery, dispatch]); // Add dependencies
//   useEffect(() => {
//     const fetchAllJobs = async () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           throw new Error("Authentication token is missing");
//         }

//         console.log("Fetching jobs with token:", token);

//         const res = await axios.get(
//           `${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`, // Add the token to the headers
//             },
//             withCredentials: true,
//           }
//         );

//         if (res.data.success) {
//           dispatch(setAllJobs(res.data.jobs));
//         } else {
//           console.error("Failed to fetch jobs, response:", res.data);
//         }
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//         if (error.response && error.response.status === 401) {
//           console.error("Unauthorized: Check if token is valid or expired.");
//         }
//       }
//     };

//     if (searchedQuery) {
//       fetchAllJobs();
//     }
//   }, [searchedQuery, dispatch]);
// };

// export default useGetAllJobs;

// import { useEffect } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { setAllJobs } from "./yourReduxSlice"; // Adjust the import to your slice

const useGetAllJobs = (searchedQuery) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("Authentication token is missing");
        }

        console.log("Fetching jobs with token:", token);

        const res = await axios.get(
          `${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        } else {
          console.error("Failed to fetch jobs, response:", res.data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        if (error.response && error.response.status === 401) {
          console.error("Unauthorized: Check if token is valid or expired.");
        } else {
          console.error("Unexpected error:", error.message);
        }
      }
    };

    if (searchedQuery) {
      fetchAllJobs();
    }
  }, [searchedQuery, dispatch]);
};

export default useGetAllJobs;
