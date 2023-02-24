import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/components/ui/navbar";
import { useRouter } from "next/router";

const pushMock: jest.Mock = jest.fn();

jest.mock("next/router", () => ({
    useRouter: jest.fn()
}));

(useRouter as jest.Mock).mockReturnValue({
    query: {},
    push: pushMock
});

describe("Navbar", () => {
  it("renders correctly", () => {
    render(
      <Navbar btnText="test" btnRoute="/test" />
    );

    const heading = screen.getByRole("heading", {
      name: /TIC TAC TOE/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("redirects to passed route correctly", () => {
    render(
      <Navbar btnText="test" btnRoute="/test" />
    );

    const button = screen.getByRole("button", {
      name: /test/i,
    });

    expect(button).toBeInTheDocument();
    button.click();
    expect(pushMock).toHaveBeenCalledWith("/test");
  })
})
