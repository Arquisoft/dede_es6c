import { useState } from "react";
import { Autocomplete, Grid, Link, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { handleIncomingRedirect,  onSessionRestore } from "@inrupt/solid-client-authn-browser";
import { useEffect } from 'react';
import profile from "./profile";
import { ConsoleMessage } from "puppeteer";
import { userInfo } from "os";
import { dirname } from "path";
import { dirxml } from "console";
import { Directions } from "@mui/icons-material";
import { FOAF,RDF, VCARD } from "@inrupt/lit-generated-vocab-common";
import { LoginButton, useSession, CombinedDataProvider, LogoutButton, Text, useThing } from "@inrupt/solid-ui-react";
import { Button, Card, CardContent, Container, Typography } from "@material-ui/core";

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
      profile(session.info.webId);
      navigate(url);
    }
  });

  useEffect(() => {
    handleIncomingRedirect({
      restorePreviousSession: true
    }).then(() => {
      if (session.info.isLoggedIn) {
        var solid = require('solid-auth-client')
        const dir = "https://uo258472.inrupt.net/direcciones/";
        var dir1 = VCARD.note.iri.value;
        console.log("Holi " + dir1);
        profile(session.info.webId).catch();
        //navigate("/profile");
      }
    })
  }, []);

  const datasetIri = session.info.webId ;
  const thingIri = VCARD.Address.iri.value;

  const { thing, error } = useThing(datasetIri, thingIri);

  return (
    <Container fixed>
      {session.info.webId ? (
        <CombinedDataProvider 
          datasetUrl={session.info.webId} 
          thingUrl={session.info.webId}>
        <Card style={{ maxWidth: 480 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Text property={FOAF.name.iri.value} />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{ display: "flex", alignItems: "center" }}>
              <Text property={VCARD.organization_name.iri.value} />
            </Typography>
             <Typography gutterBottom variant="h5" component="h2">
              {/* get address */}
              <Text id= "direction" property={VCARD.note.iri.value} />
              <Text id= "direction" property={VCARD.Address.iri.value} />
            </Typography>
          </CardContent>
        </Card>
      </CombinedDataProvider>
      ): null } 
             

      <LogoutButton >
        <Button style={{ marginTop: 20 }} variant="contained" color="primary">
          Logout
        </Button>
      </LogoutButton>


    </Container>
  );
}