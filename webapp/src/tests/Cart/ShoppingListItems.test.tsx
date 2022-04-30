import { render } from "@testing-library/react";
import { Double } from "mongodb";
import { BrowserRouter as Router } from "react-router-dom";
import ShoppingListitem from "../../components/ShoppingListItems";
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
      <ShoppingListitem
        item={cart}
      />
    </Router>
  );

  expect(getByText("Price: $" + cart.price)).toBeInTheDocument();
  expect(getByText("Total: $250.00")).toBeInTheDocument();
  expect(getByText("Cantidad: " + cart.amount)).toBeInTheDocument();
});

test("ShoppingListItem with two items, test about this item, total price and amount", async () => {
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
        <ShoppingListitem
          item={cart}
        />
      </Router>
    );
  
    expect(getByText("Price: $" + cart.price)).toBeInTheDocument();
    expect(getByText("Total: $500.00")).toBeInTheDocument();
    expect(getByText("Cantidad: " + cart.amount)).toBeInTheDocument();
  });