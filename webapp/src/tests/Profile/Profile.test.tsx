import { render } from "@testing-library/react";
import SolidConection from '../../SolidConection';
import { BrowserRouter as Router } from "react-router-dom";

test('Profile page is rendered correctly', async () => {
    const {getByText} = render(
        <Router>
            <SolidConection></SolidConection>
        </Router>
    );
    
    expect(getByText("SOLID Login")).toBeInTheDocument();
    expect(getByText("CONNECT")).toBeInTheDocument();
    expect(getByText("Inrupt")).toBeInTheDocument();
});