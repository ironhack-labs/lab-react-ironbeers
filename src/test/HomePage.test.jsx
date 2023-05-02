import { describe, test, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

describe("Iteration 2", () => {
  describe("HomePage component", () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <HomePage />
        </MemoryRouter>
      );
    });

    test("renders a link to the 'All Beers' page", async () => {
      await waitFor(() => {
        const allBeersText = screen.getByText(/All Beers/i);
        expect(allBeersText).toBeInTheDocument();

        const allBeersLink = allBeersText.closest("a");
        expect(allBeersLink).toHaveAttribute("href", "/beers");
      });
    });

    test("renders a link to the 'Random Beer' page", async () => {
      await waitFor(() => {
        const randomBeerText = screen.getByText(/Random Beer/i);
        expect(randomBeerText).toBeInTheDocument();

        const randomBeerLink = randomBeerText.closest("a");
        expect(randomBeerLink).toHaveAttribute("href", "/random-beer");
      });
    });

    test("renders a link to the 'New Beer' page", async () => {
      await waitFor(() => {
        const newBeerText = screen.getByText(/New Beer/i);
        expect(newBeerText).toBeInTheDocument();

        const newBeerLink = newBeerText.closest("a");
        expect(newBeerLink).toHaveAttribute("href", "/new-beer");
      });
    });
  });
});
