import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../redux/features/authSlice";

const useCheckAuth = () => {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  useEffect(() => {
    if (!token) {
      
      navigate("/register");
    }
  }, []);
};

export default useCheckAuth;
