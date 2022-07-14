import { render } from "@testing-library/react";
import HomeLayoutView from "../home-layout-view";

test("Something to test", () => {
  const { getByText, getByTestId } = render(<HomeLayoutView />);
});