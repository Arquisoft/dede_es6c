import { useSession } from '@inrupt/solid-ui-react';
import axios from 'axios';
import { useEffect, useState } from 'react'
import getAddress from '../getAddress';
//import {calculateTotal, calculateTotalPlusShiping, getTotalItems} from '../../helpers/calculate';

const ResumenCompra = () => {
    const [shipping, setDistance] = useState({
        distance: 0.0,
        price: 0.0,
    })

    const { session } = useSession();
    //var address = getAddress(session.info.webId+"");
    var address="Pola de Laviana Asturias España 33980";

    useEffect(() => {
        // To do: cambiar dirección
        axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoidW8yNjM1OTUiLCJhIjoiY2wxY2VjOTZzMDZ2bTNqbzI5bXk2NnU3NiJ9.7kb53nVyaMIC2MOwzoMLVg").then(
            response => {
                let long:number = response.data.features[0].center[1]
                let lat:number = response.data.features[0].center[0]
                console.log(long+", "+lat)
            }
        );
    }, []);

    return (<div></div>);
}

export default ResumenCompra;