import { Button } from "@mui/material";

export default function Footer(): JSX.Element{
    return (
        <footer>
            <ul>
                <li>Álvaro García Peña uo275778@uniovi.es</li>
                <li>Luis Manuel González Baizán uo269502@uniovi.es</li>
                <li>Germán Díaz González uo258472@uniovi.es</li>
                <li>María Fernández Rojo uo263595@uniovi.es</li>
                <li>Daniel Fernández Bernardino uo269783@uniovi.es</li>
                <li>Mateo García Subirán uo278193@uniovi.es</li>
            </ul>
            <p>© dede_es6c</p>
            <Button id="ButtonDoc" href="https://arquisoft.github.io/dede_es6c/" color="inherit">ver documentación</Button>
        </footer>
    );
  }