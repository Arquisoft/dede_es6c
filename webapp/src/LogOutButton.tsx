import {Button} from "@mui/material";
import React from "react";
import { useSession } from "@inrupt/solid-ui-react";

const LogoutButton = () => {
    const apiEndPoint = process.env.REACT_APP_API_URI || "http://localhost:5000";
    return(
        <Button onClick={useSession().logout}>
            Logout
        </Button>
    )
}

export default LogoutButton