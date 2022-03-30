import { useEffect } from "react";
import Home from "./components/Home";
import { useNavigate } from "react-router-dom";

const Disconection = () => {

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("webID");
    localStorage.removeItem("sessionID");
    localStorage.removeItem("name");
    localStorage.removeItem("address");
    navigate("/");
  });

  return <Home />;
};

export default Disconection;
