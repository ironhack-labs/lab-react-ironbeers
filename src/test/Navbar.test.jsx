import { describe, test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Iteration 3", () => {
  describe("Navbar component", () => {
    test("renders a nav element with a link to the home page", async () => {
      const { container } = render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      );

      const link = container.querySelector("a");
      expect(link).toHaveAttribute("href", "/");

      const navElement = await waitFor(() => screen.getByRole("navigation"));
      expect(navElement).toBeInTheDocument();
    });
  });
});
