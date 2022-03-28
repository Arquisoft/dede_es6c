import { useSession, CombinedDataProvider, LogoutButton, Text  } from "@inrupt/solid-ui-react";
import { Button, Card, CardContent, Container, Typography } from "@material-ui/core";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
import getAddress from "./getAddress";
var solid = require('solid-auth-client')

const Profile = () => {
    const { session } = useSession();
    const webid = "" + session.info.webId;

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
                <Typography gutterBottom variant="h4" component="h3">
                {/* Para obtener la direccion */}
                <Text id= "direction" property={VCARD.note.iri.value} />
                </Typography>
            </CardContent>
            </Card>
        </CombinedDataProvider>
        ): null } 
                

        <LogoutButton >
            <Button style={{ marginTop: 500 }} variant="contained" color="inherit">
            Logout
            </Button>
        </LogoutButton>


        </Container>
    );
}


export default Profile