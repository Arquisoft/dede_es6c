import { render } from "@testing-library/react";
import ProfileInfo from '../../components/profile';

test('Profile info page is rendered correctly', async () => {
    localStorage.setItem("username", 'María Fernández Rojo');
    localStorage.setItem("organization", 'Universidad de Oviedo');
    localStorage.setItem("address", 'España Asturias Jovellanos 33003');

    const {getByText} = render(<ProfileInfo></ProfileInfo>);
    
    expect(getByText("María Fernández Rojo")).toBeInTheDocument();
    expect(getByText("Universidad de Oviedo")).toBeInTheDocument();
    expect(getByText("España Asturias Jovellanos 33003")).toBeInTheDocument();
    expect(getByText("LOGOUT")).toBeInTheDocument();
});