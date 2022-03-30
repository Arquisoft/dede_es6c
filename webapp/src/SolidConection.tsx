import { useState } from "react";
import { Autocomplete, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { LoginButton, useSession } from "@inrupt/solid-ui-react";
import { useNavigate } from "react-router-dom";
import { handleIncomingRedirect,  onSessionRestore } from "@inrupt/solid-client-authn-browser";
import { useEffect } from 'react';

const authOptions = {
clientName: "DedEx: Decentralized Delivery",
};

export default function SolidConection() {

  const navigate = useNavigate();
  const [oidcIssuer, setOidcIssuer] = useState("https://broker.pod.inrupt.com/");
  const providers = [{ displayName: "Broker Inrupt", url: "https://broker.pod.inrupt.com/" }, { displayName: "Inrupt", url: "https://inrupt.net/" }]
  const { session } = useSession();

  onSessionRestore((url) => {
    if (session.info.isLoggedIn) {
      navigate(url);
    }
  });

  useEffect(() => {
    handleIncomingRedirect({
      restorePreviousSession: true
    }).then(() => {
      if (session.info.isLoggedIn) {
        localStorage.setItem("sessionID", session.info.sessionId);
        navigate("/profile");
      }
    })
  });

  return (
    <Container id="mainLoginDiv">
      {/* {!session.info.isLoggedIn ? ( */}
        <>
          <Typography id="solidLogin" variant="h3">
            SOLID Login
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-providers"
            options={providers}
            renderInput={(params) => <TextField {...params} label="Provider:" />}
            getOptionLabel={(option) => option.displayName}
            onChange={(e, value) => {
              if (value != null)
                setOidcIssuer(value.url)
            }}
          />
          <Grid id="solidButtons" container>
            <Grid item>
              <LoginButton
                oidcIssuer={oidcIssuer}
                redirectUrl={window.location.href}
                authOptions={authOptions}>
                <Button id="loginButton" data-testid="button" color="primary" variant="contained">CONNECT</Button>
              </LoginButton>
            </Grid>
            <Grid item>
              <Button href="/" variant="contained" id="cancelButton" >Cancel</Button>
            </Grid>
          </Grid>
          <Typography variant="body1" component="p" id="help">
            Don't have a POD? Get one here: <Link id="inrupt" href="https://inrupt.com/" target="_blank">Inrupt</Link>
          </Typography>
        </>
      {/* ) : (
        <Typography id="pageTitle" variant="h3">
          Oops! Something went wrong...
        </Typography>
      )} */}
    </Container>
  );
}