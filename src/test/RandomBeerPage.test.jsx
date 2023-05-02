import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import nock from "nock";
import axios from "axios";
import RandomBeerPage from "../pages/RandomBeerPage";

const API_URL = "https://ih-beers-api2.herokuapp.com";

axios.defaults.adapter = "http";

describe("Iteration 6", () => {
  describe("RandomBeerPage component", () => {
    const randomBeer = {
      _id: "r1",
      image_url: "https://random-image1.jpg",
      name: "Random Beer 1",
      tagline: "Random Tagline 1",
      attenuation_level: 99,
      description: "Random Description 1",
      contributed_by: "Random Contributor 1",
    };

    const namePattern = new RegExp(randomBeer.name, "i");
    const taglinePattern = new RegExp(randomBeer.tagline, "i");
    const attenuationPattern = new RegExp(randomBeer.attenuation_level, "i");
    const descriptionPattern = new RegExp(randomBeer.description, "i");
    const contributedByPattern = new RegExp(randomBeer.contributed_by, "i");

    let scope;

    beforeEach(() => {
      scope = nock(API_URL).get("/beers/random").reply(200, randomBeer);

      render(
        <MemoryRouter initialEntries={["/random-beer"]}>
          <RandomBeerPage />
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
          images.find((img) => img.getAttribute("src") === randomBeer.image_url)
        ).toHaveAttribute("src", randomBeer.image_url);
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
