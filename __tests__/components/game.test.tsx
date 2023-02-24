import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Game from "@/components/game";

jest.mock("next/router", () => ({
    useRouter: jest.fn()
}));

describe("Game", () => {
  it("renders correctly", () => {
    render(
      <Game />
    );

    const heading = screen.getByRole("heading", {
      name: /O TURN/i,
    });
    const tile = screen.getAllByRole("button", {
      name: /tile/i,
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
    expect(tile[0]).toBeInTheDocument();
  });

  it("changes tile when clicked", () => {
    render(
      <Game />
    );

    const heading = screen.getByRole("heading", {
      name: /O TURN/i,
    });
    expect(heading).toHaveTextContent("O TURN");

    const tile = screen.getAllByRole("button", {
      name: /tile/i,
    });

    expect(tile[0]).toBeInTheDocument();
    fireEvent.click(tile[0]);
    expect(tile[0]).toHaveTextContent("O");
    expect(heading).toHaveTextContent("X TURN");
  });

  it("shows modal when a player wins", () => {
    render(
      <Game />
    );

    const tiles = screen.getAllByRole("button", {
      name: /tile/i,
    });

    fireEvent.click(tiles[0]);
    fireEvent.click(tiles[1]);
    fireEvent.click(tiles[3]);
    fireEvent.click(tiles[4]);
    fireEvent.click(tiles[6]);

    const modal = screen.getByRole("alertdialog", {
      name: /modal/i,
    });

    const messsage = screen.getByRole("heading", {
      name: /GAME FINISHED, O WON!/i,
    });

    expect(modal).toBeInTheDocument();
    expect(modal).toBeVisible();
    expect(messsage).toBeInTheDocument();
  });

  it("shows modal when the game ends in a draw", () => {
    render(
      <Game />
    );

    const tiles = screen.getAllByRole("button", {
      name: /tile/i,
    });

    fireEvent.click(tiles[0]);
    fireEvent.click(tiles[1]);
    fireEvent.click(tiles[2]);
    fireEvent.click(tiles[6]);
    fireEvent.click(tiles[7]);
    fireEvent.click(tiles[8]);
    fireEvent.click(tiles[3]);
    fireEvent.click(tiles[4]);
    fireEvent.click(tiles[5]);

    const modal = screen.getByRole("alertdialog", {
      name: /modal/i,
    });

    const message = screen.getByRole("heading", {
      name: /IT'S A DRAW!/i
    });

    expect(modal).toBeInTheDocument();
    expect(modal).toBeVisible();
    expect(message).toBeInTheDocument();
  });
})
