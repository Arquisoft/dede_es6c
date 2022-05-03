import axios from 'axios';
import { useEffect } from 'react'

const ResumenCompra = () => {
    const PRICE = 10.0;
    var address = localStorage.getItem("address");

    useEffect(() => {
        axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoidW8yNjM1OTUiLCJhIjoiY2wxY2VjOTZzMDZ2bTNqbzI5bXk2NnU3NiJ9.7kb53nVyaMIC2MOwzoMLVg").then(
            response => {
                let long:number = response.data.features[0].center[1]
                let lat:number = response.data.features[0].center[0]
                console.log(long+", "+lat)
                let distancia:number = distanciaEnKm(43.354688, -5.851250, long, lat);
                console.log("distancia: " + distancia)
                let precioEnvio:number = distancia * PRICE;
                localStorage.setItem("precioEnvio", JSON.stringify(precioEnvio));
                console.log("precio: " + precioEnvio);
            }
        );
    });

    return (<div></div>);
}

function distanciaEnKm(lat1: number, lon1: number, lat2: number, lon2: number) : number {
    let earthRadiusKm:number = 6371;

    let dLat : number = gradosARadianes(lat2-lat1);
    let dLon : number = gradosARadianes(lon2-lon1);

    lat1 = gradosARadianes(lat1);
    lat2 = gradosARadianes(lat2);

    let a : number = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    let c : number  = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 

    return earthRadiusKm * c;
}

function gradosARadianes(degrees: number) : number {
    return degrees * Math.PI / 180;
}

export default ResumenCompra;
