import { render, screen } from "@testing-library/react";
import Banner from "../src/components/InteractiveBanner";

test("renders banner with correct text", () => {
  render(<Banner text="Test Banner" bg="bg-red-500" image="test.jpg" />);
  expect(screen.getByText("Test Banner")).toBeInTheDocument();
});
