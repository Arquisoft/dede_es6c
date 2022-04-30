import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import History from "../../components/History";
import { SharedHistory } from "../../shared/shareddtypes";


test("A history with products is rendered", async () => {
  const products: SharedHistory = 
    {
      _id: 50,
      username: "Luis Manuel",
      product_name: "5008",
      product_type:"Peugeot",
      product_price: 10250,
      amount: 1,
      id: 50,
      order_id: 50,
      state: "PENDING",
      date: new Date()
    };

    const { getByText } = render(
        <Router>
          <History
          />
        </Router>
      );

  //  expect(getByText(products.product_name)).toBeInTheDocument();
  //  expect(getByText(products.state)).toBeInTheDocument();
});

test("An empty history", async () => {
    const products: SharedHistory[] = [];
  
    const { getByText } = render(
        <History
        />
    );

    expect(getByText("History")).toBeInTheDocument();
    expect(getByText("Product")).toBeInTheDocument();
    expect(getByText("Type")).toBeInTheDocument();
    expect(getByText("Price")).toBeInTheDocument();
});