import { render } from "@testing-library/react";
import { Double } from "mongodb";
import { BrowserRouter as Router } from "react-router-dom";
import Cartitem from "../../components/Cartitem";
import { SharedProduct } from "../../shared/shareddtypes";

test("Cart with one item, test about this item", async () => {
  const cart: SharedProduct = 
    {
        _id: 101,
      name: "Cuero",
      price: 250.00,
      type:"Alfombrilla",
      imgUrl: "",
      amount: 1
    };

  const { getByText } = render(
    <Router>
      <Cartitem
        item={cart}
        addToCart={() => {}}
        removeFromCart={() => {}}
      />
    </Router>
  );

  expect(getByText("Price: $" + cart.price)).toBeInTheDocument();
  expect(getByText("Total: $250.00")).toBeInTheDocument();
});

test("Cart with two item, test about this item and the correctly total price", async () => {
    const cart: SharedProduct = 
      {
          _id: 101,
        name: "Cuero",
        price: 250.00,
        type:"Alfombrilla",
        imgUrl: "",
        amount: 2
      };
  
    const { getByText } = render(
      <Router>
        <Cartitem
          item={cart}
          addToCart={() => {}}
          removeFromCart={() => {}}
        />
      </Router>
    );
  
    expect(getByText("Price: $" + cart.price)).toBeInTheDocument();
    expect(getByText("Total: $500.00")).toBeInTheDocument();
  });