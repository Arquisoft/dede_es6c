var solid = require('solid-auth-client')

export default async function profile(webId: any) {
    console.log(webId);
    solid.fetch(webId).then(console.log);
}