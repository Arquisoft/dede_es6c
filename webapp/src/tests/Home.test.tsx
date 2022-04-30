import { render, fireEvent } from "@testing-library/react";
import Home from '../components/Home';

test('Home page is rendered correctly', async () => {
    const {getByText} = render(<Home/>);
    expect(getByText('Sale of used vehicles, spare parts and accessories related to the automotive industry')).toBeInTheDocument();
    expect(getByText("We are a humble automotive company eager to offer the best service to our customers. We believe in second chances, so our vehicles are second hand. We will take care of overhauling them ourselves, always providing the best professionals in the sector for this task.")).toBeInTheDocument();
});