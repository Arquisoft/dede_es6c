import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ShoppingCart from "../../components/Cart";
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
      <ShoppingCart
        cartItems={cart}
        addToCart={() => {}}
        removeFromCart={() => {}}
      />
    </Router>
  );

  //Check that the shopping cart title is rendered
  expect(getByText("Tow truck")).toBeInTheDocument();
  //Check that the buttons continue shopping and checkout are rendered
  expect(getByText("Products")).toBeInTheDocument();
  expect(getByText("Pay")).toBeInTheDocument();
  //Check that the proceed to checkout button is disabled

});

//Test for the ShoppingCart component, receives an empty list of cart items and it is rendered properly.
test("An empty list of cart items is rendered", async () => {
  const cart: SharedProduct[] = [];

  const { getByText } = render(
    <Router>
      <ShoppingCart
        cartItems={cart}
        addToCart={() => {}}
        removeFromCart={() => {}}
      />
    </Router>
  );

  //Check that the shopping cart title is rendered
  expect(getByText("Tow truck")).toBeInTheDocument();
  //Check that the buttons continue shopping and checkout are rendered
  expect(getByText("No cars to show.")).toBeInTheDocument();
  expect(getByText("Pay")).toBeInTheDocument();
});