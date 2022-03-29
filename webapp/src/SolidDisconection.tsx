import { useEffect } from "react";
import Home from "./components/Home";
import { useSession } from '@inrupt/solid-ui-react';
import { useNavigate } from "react-router-dom";
import Shippy from "./Shippy";

const Disconection = () => {

  Shippy();

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
