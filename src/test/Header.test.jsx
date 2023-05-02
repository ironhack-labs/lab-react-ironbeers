import { describe, test, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";

describe("Header component", () => {
  test("renders a nav element with a link to the home page", async () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", "/");

    const navElement = await waitFor(() => screen.getByRole("navigation"));
    expect(navElement).toBeInTheDocument();
  });
});
