import { describe, test, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

describe("HomePage component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <HomePage />
      </MemoryRouter>
    );
  });

  test("renders 'All Beers' link with correct href", async () => {
    await waitFor(() => {
      const allBeersText = screen.getByText(/All Beers/i);
      expect(allBeersText).toBeInTheDocument();

      const allBeersLink = allBeersText.closest("a");
      expect(allBeersLink).toHaveAttribute("href", "/beers");
    });
  });

  test("renders 'Random Beer' link with correct href", async () => {
    await waitFor(() => {
      const randomBeerText = screen.getByText(/Random Beer/i);
      expect(randomBeerText).toBeInTheDocument();

      const randomBeerLink = randomBeerText.closest("a");
      expect(randomBeerLink).toHaveAttribute("href", "/random-beer");
    });
  });

  test("renders 'New Beer/ link with correct href", async () => {
    await waitFor(() => {
      const newBeerText = screen.getByText(/New Beer/i);
      expect(newBeerText).toBeInTheDocument();

      const newBeerLink = newBeerText.closest("a");
      expect(newBeerLink).toHaveAttribute("href", "/new-beer");
    });
  });
});
