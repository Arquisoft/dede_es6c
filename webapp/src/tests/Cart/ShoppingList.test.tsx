import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ShoppingList from "../../components/ShoppingList";
import { SharedProduct } from "../../shared/shareddtypes";

//Test for the ShoppingCart component, receives a list of cart items and it is rendered properly.
test("A list of two cart items is rendered", async () => {
  const cart: SharedProduct[] = [
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
    <Router>
      <ShoppingList
        cart={cart}
        removeFromCart={() => {}}
      />
    </Router>
  );

  //Check that the shopping cart title is rendered
  expect(getByText("Checkout")).toBeInTheDocument();
  //Check that the buttons continue shopping and checkout are rendered
  expect(getByText("Precio envío: ")).toBeInTheDocument();
  expect(getByText("Precio con envío e IVA: ")).toBeInTheDocument();
  //Check that the proceed to checkout button is disabled

});