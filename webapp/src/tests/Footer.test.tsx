import { render, fireEvent, act } from "@testing-library/react";
import Footer from '../components/Footer';

test('check that the footer is rendering propertly', async() => {
    const { getByText } = render(<Footer/>);
    expect(getByText("Álvaro García Peña uo275778@uniovi.es")).toBeInTheDocument();
    expect(getByText("Luis Manuel González Baizán uo269502@uniovi.es")).toBeInTheDocument();
    expect(getByText("Germán Díaz González uo258472@uniovi.es")).toBeInTheDocument();
    expect(getByText("María Fernández Rojo uo263595@uniovi.es")).toBeInTheDocument();
    expect(getByText("Daniel Fernández Bernardino uo269783@uniovi.es")).toBeInTheDocument();
    expect(getByText("Mateo García Subirán uo278193@uniovi.es")).toBeInTheDocument();
    expect(getByText("© dede_es6c")).toBeInTheDocument();
});