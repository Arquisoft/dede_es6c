import { render } from "@testing-library/react";
import ResumenCompra from '../../components/ResumenCompra';

test("The view of the purchase summary is correct", async () => {
    localStorage.setItem("address", 'España Asturias Jovellanos 33003');

    const { getByText } = render(
        <ResumenCompra></ResumenCompra>
    );

    expect(getByText("Checkout")).toBeInTheDocument();
    expect(getByText("Precio envío: ")).toBeInTheDocument();
    expect(getByText("Precio con envío e IVA: ")).toBeInTheDocument();
    expect(getByText("CREATE ORDER")).toBeInTheDocument();
});