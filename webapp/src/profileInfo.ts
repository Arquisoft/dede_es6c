import {
    getSolidDataset,
    getThing,
    getStringNoLocale,
    Thing,
} from "@inrupt/solid-client";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";

export async function getInfo(webID: string): Promise<string[]> {
    let profileDocumentURI = webID.split("#")[0]; // we are just interested in the card
    let myDataset = await getSolidDataset(profileDocumentURI); // obtain the dataset from the URI
    let profile = getThing(myDataset, webID); // we obtain the thing we are looking for from the dataset
    // we obtain the POD info
    let name = getStringNoLocale(profile as Thing, FOAF.name.iri.value) as string;
    let organization = getStringNoLocale(profile as Thing, FOAF.name.iri.value) as string;
    let address = getStringNoLocale(profile as Thing, VCARD.note) as string;
    return [name, organization, address];
};

export default getInfo;