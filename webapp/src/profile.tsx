import { useSession, CombinedDataProvider, LogoutButton, Text  } from "@inrupt/solid-ui-react";
import { Button, Card, CardContent, Container, Typography } from "@material-ui/core";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
import getInfo from "./profileInfo";
import getAddress from "./getAddress";
import { Grid } from "@mui/material";

export default function Profile() {
    const { session } = useSession();
    

    getInfo(session.info.webId+"").then((result) => {
        localStorage.setItem("username", result[0]);
        localStorage.setItem("organization", result[1]);
        localStorage.setItem("address", result[2]);
    });

    return (
        <body>
        <Container id="profileCard" fixed>
        {session.info.webId ? (
            <CombinedDataProvider 
            datasetUrl={session.info.webId} 
            thingUrl={session.info.webId}>
            <Card style={{ maxWidth: 1300 }}>
            <CardContent>
                <div className="cardContent">
                <Typography gutterBottom variant="h4" component="h1" id="solidName">
                <Text property={FOAF.name.iri.value} />
                </Typography>
                </div>
                <div className="cardContent">
                <Typography variant="body2" color="textSecondary" component="p" style={{ display: "flex", alignItems: "center" }}>
                <Text property={VCARD.organization_name.iri.value} />
                </Typography>
                <Typography gutterBottom variant="h4" component="h3">
                {/* Para obtener la direccion */}
                <Text id= "direction" property={VCARD.note.iri.value} />
                </Typography>
                </div>
            </CardContent>
            </Card>
            </CombinedDataProvider>
        ): null } 
                
        <Grid id="solidButtons" container>
            <Grid item>
            <LogoutButton >
                <Button id="logoutButton" href="http://localhost:3000" variant="contained" color="primary">
                Logout
                </Button>
            </LogoutButton>
            </Grid>
        </Grid>
        </Container>
        </body>
    );
}
