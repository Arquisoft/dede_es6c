import { useEffect } from "react";
import Home from "./components/Home";
import { useSession } from '@inrupt/solid-ui-react';
import { useNavigate } from "react-router-dom";

const Disconection = () => {

  const {session} = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
    session.logout();
    localStorage.removeItem("webID");
    localStorage.removeItem("sessionID");
    localStorage.removeItem("name");
    localStorage.removeItem("address");
  });

  return <Home />;
};

export default Disconection;
