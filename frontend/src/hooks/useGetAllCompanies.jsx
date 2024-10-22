import { setCompanies } from "@/redux/companySlice";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
        } else {
          console.log(res.data.message); // Log for debugging
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log("Companies API not found. Check route or API endpoint.");
        } else {
          console.log(error);
        }
      }
    };

    fetchCompanies();
  }, [dispatch]);
};

export default useGetAllCompanies;
