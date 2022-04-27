import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import History from "../../components/History";
import { SharedHistory } from "../../shared/shareddtypes";


test("A list of products is rendered", async () => {
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

      //expect(getAllByText(products.product_name).length).toEqual(1);
    //   expect(getAllByText(products.product_type)).toBeInTheDocument();
    //   expect(getAllByText(products.state)).toBeInTheDocument();

    //   expect(getAllByText(products[1].product_name)).toBeInTheDocument();
    //   expect(getAllByText(products[1].product_type)).toBeInTheDocument();
    //   expect(getAllByText(products[1].state)).toBeInTheDocument();

//    expect(getByText("History")).toBeInTheDocument();
//    expect(getByText("Product")).toBeInTheDocument();
//    expect(getByText("Type")).toBeInTheDocument();
//    expect(getByText("Price")).toBeInTheDocument();

  //expect(getByText("Amount")).toBeInTheDocument();
  //expect(getByText("Order")).toBeInTheDocument();
  //expect(getByText("State")).toBeInTheDocument();
  //expect(getByText("Date")).toBeInTheDocument();
  expect(getByText(products.product_name)).toBeInTheDocument();
  expect(getByText(products.state)).toBeInTheDocument();
});

test("An empty list of cart items is rendered", async () => {
    const products: SharedHistory[] = [];
  
    const { getByText } = render(
      <Router>
        <History
        />
      </Router>
    );
  
    expect(getByText("History")).toBeInTheDocument();
    expect(getByText("Product")).toBeInTheDocument();
    expect(getByText("Type")).toBeInTheDocument();
    expect(getByText("Price")).toBeInTheDocument();
});