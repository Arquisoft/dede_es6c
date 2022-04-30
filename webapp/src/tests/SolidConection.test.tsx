import { render} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SolidConection from '../SolidConection';

test('check that the solidConnection page is rendering propertly', async() => {
    const { getByText } = render(
        <Router>
            <SolidConection/>
        </Router>);
    expect(getByText("SOLID Login")).toBeInTheDocument();
    expect(getByText("CONNECT")).toBeInTheDocument();
    expect(getByText("Cancel")).toBeInTheDocument();
});