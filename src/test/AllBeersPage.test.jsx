import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import nock from "nock";
import axios from "axios";
import AllBeersPage from "../pages/AllBeersPage";

const API_URL = "https://ih-beers-api2.herokuapp.com";

axios.defaults.adapter = "http";

describe("AllBeersPage component", () => {
  const beers = [
    {
      _id: "a1",
      image_url: "https://image1.jpg",
      name: "Beer 1",
      tagline: "Tagline 1",
      contributed_by: "Contributor 1",
    },
    {
      _id: "a2",
      image_url: "https://image2.jpg",
      name: "Beer 2",
      tagline: "Tagline 2",
      contributed_by: "Contributor 2",
    },
  ];

  let scope;

  beforeEach(() => {
    scope = nock(API_URL).get("/beers").reply(200, beers);

    render(
      <MemoryRouter initialEntries={["/beers"]}>
        <AllBeersPage />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    scope.done();
  });

  test("renders a list of all beers and their details from the Beers API", async () => {
    await waitFor(() => {
      expect(screen.getByText("Beer 1")).toBeInTheDocument();
    });

    const beerImages = screen.getAllByRole("img");
    expect(beerImages).toHaveLength(2);

    expect(screen.getByText("Tagline 1")).toBeInTheDocument();
    expect(screen.getByText("Created by: Contributor 1")).toBeInTheDocument();

    expect(screen.getByText("Beer 2")).toBeInTheDocument();
    expect(screen.getByText("Tagline 2")).toBeInTheDocument();
    expect(screen.getByText("Created by: Contributor 2")).toBeInTheDocument();
  });

  test("renders a link to Beer Details Page for each beer", async () => {
    await waitFor(() => {
      expect(screen.getByText("Beer 1")).toBeInTheDocument();
    });

    const beerLink1 = screen.getByText("Beer 1").closest("a");
    expect(beerLink1).toHaveAttribute("href", "/beers/a1");

    const beerLink2 = screen.getByText("Beer 2").closest("a");
    expect(beerLink2).toHaveAttribute("href", "/beers/a2");
  });
});
