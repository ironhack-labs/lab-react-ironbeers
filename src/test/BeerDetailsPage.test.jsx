import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import nock from "nock";
import axios from "axios";
import App from "../App";

const API_URL = "https://ih-beers-api2.herokuapp.com";

axios.defaults.adapter = "http";

describe("Iteration 2", () => {
  describe("BeerDetailsPage component", () => {
    const beer = {
      _id: "a1",
      image_url: "https://image1.jpg",
      name: "Beer 1",
      tagline: "Tagline 1",
      attenuation_level: 75,
      description: "Description 1",
      contributed_by: "Contributor 1",
    };

    const namePattern = new RegExp(beer.name, "i");
    const taglinePattern = new RegExp(beer.tagline, "i");
    const attenuationPattern = new RegExp(beer.attenuation_level, "i");
    const descriptionPattern = new RegExp(beer.description, "i");
    const contributedByPattern = new RegExp(beer.contributed_by, "i");

    let scope;

    beforeEach(() => {
      scope = nock(API_URL).get("/beers/a1").reply(200, beer);

      render(
        <MemoryRouter initialEntries={["/beers/a1"]}>
          <App />
        </MemoryRouter>
      );
    });

    afterEach(() => {
      scope.done();
    });

    test("renders the image of the selected beer", async () => {
      await waitFor(() => {
        const images = screen.getAllByRole("img");
        expect(
          images.find((img) => img.getAttribute("src") === beer.image_url)
        ).toHaveAttribute("src", beer.image_url);
      });
    });

    test("renders the name of the selected beer", async () => {
      await waitFor(() => {
        expect(screen.getByText(namePattern)).toBeInTheDocument();
      });
    });

    test("renders the tagline of the selected beer", async () => {
      await waitFor(() => {
        expect(screen.getByText(taglinePattern)).toBeInTheDocument();
      });
    });

    test("renders the attenuation level of the selected beer", async () => {
      await waitFor(() => {
        expect(screen.getByText(attenuationPattern)).toBeInTheDocument();
      });
    });

    test("renders the description of the selected beer", async () => {
      await waitFor(() => {
        expect(screen.getByText(descriptionPattern)).toBeInTheDocument();
      });
    });

    test("renders the contributor of the selected beer", async () => {
      await waitFor(() => {
        expect(screen.getByText(contributedByPattern)).toBeInTheDocument();
      });
    });
  });
});
