import { useSession, CombinedDataProvider, LogoutButton, Text  } from "@inrupt/solid-ui-react";
import { Button, Card, CardContent, Container, Typography } from "@material-ui/core";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
import getInfo from "./profileInfo";

const Profile = () => {
    const { session } = useSession();
    

    getInfo(session.info.webId+"").then((result) => {
        localStorage.setItem("username", result[0]);
        localStorage.setItem("organization", result[1]);
        localStorage.setItem("address", result[2]);
    });

    return (
        <Container fixed>
        {session.info.webId ? (
            <CombinedDataProvider 
            datasetUrl={session.info.webId} 
            thingUrl={session.info.webId}>
            <Card style={{ maxWidth: 1300 }}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="h1">
                <Text property={FOAF.name.iri.value} />
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{ display: "flex", alignItems: "center" }}>
                <Text property={VCARD.organization_name.iri.value} />
                </Typography>
                <Typography gutterBottom variant="h4" component="h3">
                {/* Para obtener la direccion */}
                <Text id= "direction" property={VCARD.note.iri.value} />
                </Typography>
            </CardContent>
            </Card>
        </CombinedDataProvider>
        ): null } 
                

        <LogoutButton >
            <Button style={{ marginTop: 500 }} href="http://localhost:3000" variant="contained" color="primary">
            Logout
            </Button>
        </LogoutButton>


        </Container>
    );
}


export default Profile