import { render, screen } from "@testing-library/react";
import NavBar from '../components/NavBar';
import { SharedProduct } from "../shared/shareddtypes";

test("The navigation works correctly", async () => {
    const items: SharedProduct[] = [
      {
          _id: 100,
        name: "5008",
        price: 10250,
        type:"Peugeot",
        imgUrl: "",
        amount: 1
      },
      {
          _id: 101,
        name: "Cuero",
        price: 250,
        type:"Alfombrilla",
        imgUrl: "",
        amount: 2
      },
    ];
  
    render(
        <NavBar
            cartItems={items}
            handleAddToCart={() => {}}
            handleRemoveFromCart={() => {}}
        />
    );

    ///
    let linkElement = screen.getByAltText(/products/i);
    expect(linkElement).toBeInTheDocument();
});