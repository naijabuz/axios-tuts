import { useEffect } from "react";
import authFetch from "../custom";
import axios from "axios";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const responseOne = await authFetch("/react-store-products");

      console.log(responseOne);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
