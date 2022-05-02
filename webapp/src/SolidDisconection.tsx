import { useEffect } from "react";
import Home from "./components/Home";
import { useNavigate } from "react-router-dom";

const Disconection = () => {

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("webID");
    localStorage.removeItem("sessionID");
    localStorage.removeItem("username");
    localStorage.removeItem("organization");
    localStorage.removeItem("address");
    localStorage.removeItem("cart");
    navigate("/");
  });

  return <Home />;
};

export default Disconection;
