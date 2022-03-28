import { useEffect } from "react";
import Home from "./components/Home";
import { useSession } from '@inrupt/solid-ui-react';

const Disconection = () => {

  const {session} = useSession();


  useEffect(() => {
    console.log("holiwi");
    session.logout();
    localStorage.removeItem("webID");
    localStorage.removeItem("sessionID");
    localStorage.removeItem("name");
    localStorage.removeItem("address");
  });

  return <Home />;
};

export default Disconection;
