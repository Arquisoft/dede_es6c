import { render, fireEvent, act } from "@testing-library/react";
import NavBar from '../components/NavBar';
import { SharedProduct } from "../shared/shareddtypes";

test("A list of two cart items is rendered", async () => {
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
  
    const { getByText } = render(
        <NavBar
            cartItems={items}
            handleAddToCart={() => {}}
            handleRemoveFromCart={() => {}}
        />
    );
  
    expect(getByText("DeDe")).toBeInTheDocument();
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Products")).toBeInTheDocument();
    expect(getByText("Shopping Cart")).toBeInTheDocument();
    expect(getByText("History")).toBeInTheDocument();
    expect(getByText("Profile")).toBeInTheDocument();
  
});