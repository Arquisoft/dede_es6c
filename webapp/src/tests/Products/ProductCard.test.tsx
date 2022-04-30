import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { SharedProduct } from "../../shared/shareddtypes";


test("A list of products is rendered", async () => {
  const products: SharedProduct = 
    {
      _id: 159,
      name: "5008",
      price: 10250,
      type:"Peugeot",
      imgUrl: "",
      amount: 0
    };

  const { getAllByText } = render(
    <Router>
      <ProductCard
        producto={products}
        handleAddToCart={() => {}}
      />
    </Router>
  );

  expect(getAllByText(products.name).length).toEqual(1);
  expect(getAllByText(products.type).length).toEqual(1);
});