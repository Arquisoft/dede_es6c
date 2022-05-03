import { render } from "@testing-library/react";
import SolidConection from '../../SolidConection';

test('Profile page is rendered correctly', async () => {
    const {getByText} = render(<SolidConection></SolidConection>);
    
    expect(getByText("SOLID Login")).toBeInTheDocument();
    expect(getByText("CONNECT")).toBeInTheDocument();
    expect(getByText("CANCEL")).toBeInTheDocument();
    expect(getByText("Don't have a POD? Get one here: Inrupt")).toBeInTheDocument();
});