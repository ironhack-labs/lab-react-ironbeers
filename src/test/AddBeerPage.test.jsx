import { describe, test, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import nock from "nock";
import axios from "axios";
import AddBeerPage from "../pages/AddBeerPage";

const API_URL = "https://ih-beers-api2.herokuapp.com";

axios.defaults.adapter = "http";

describe("Iteration 3", () => {
  describe("AddBeerPage component", () => {
    const newBeer = {
      name: "New Beer 1",
      tagline: "New Tagline 1",
      description: "New Description 1",
      first_brewed: "01/2023",
      brewers_tips: "Test Brewer Tips",
      attenuation_level: 1,
      contributed_by: "New Contributor 1",
    };

    let container;

    beforeEach(() => {
      const renderResult = render(
        <MemoryRouter>
          <AddBeerPage />
        </MemoryRouter>
      );

      container = renderResult.container;
    });

    test("renders the 'name' input field", async () => {
      const nameInput = container.querySelector('input[name="name"]');
      await waitFor(() => {
        expect(nameInput).not.toBeNull();
      });
    });

    test("renders the 'tagline' input field", async () => {
      const taglineInput = container.querySelector('input[name="tagline"]');
      await waitFor(() => {
        expect(taglineInput).not.toBeNull();
      });
    });

    test("renders the 'description' input field", async () => {
      const descriptionInput = container.querySelector(
        'textarea[name="description"]'
      );
      await waitFor(() => {
        expect(descriptionInput).not.toBeNull();
      });
    });

    test("renders the 'firstBrewed' input field", async () => {
      const firstBrewedInput = container.querySelector(
        'input[name="firstBrewed"]'
      );
      await waitFor(() => {
        expect(firstBrewedInput).not.toBeNull();
      });
    });

    test("renders the 'brewersTips' input field", async () => {
      const brewersTipsInput = container.querySelector(
        'input[name="brewersTips"]'
      );
      await waitFor(() => {
        expect(brewersTipsInput).not.toBeNull();
      });
    });

    test("renders the 'contributedBy' input field", async () => {
      const contributedByInput = container.querySelector(
        'input[name="contributedBy"]'
      );
      await waitFor(() => {
        expect(contributedByInput).not.toBeNull();
      });
    });

    test("renders the 'attenuationLevel' input field", async () => {
      const attenuationInput = container.querySelector(
        'input[name="attenuationLevel"]'
      );
      await waitFor(() => {
        expect(attenuationInput).not.toBeNull();
      });
    });

    test("renders the 'Add Beer' submit button", async () => {
      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: /add beer/i })
        ).toBeInTheDocument();
      });
    });

    test("sends form values to the Beers API via POST request when the form is submitted", async () => {
      let requestBody;
      const scope = nock(API_URL)
        .post("/beers/new", (body) => {
          requestBody = body;
          return true;
        })
        .reply(200, {});

      const nameInput = container.querySelector('input[name="name"]');
      const taglineInput = container.querySelector('input[name="tagline"]');
      const descriptionInput = container.querySelector(
        'textarea[name="description"]'
      );
      const firstBrewedInput = container.querySelector(
        'input[name="firstBrewed"]'
      );
      const brewersTipsInput = container.querySelector(
        'input[name="brewersTips"]'
      );
      const contributedByInput = container.querySelector(
        'input[name="contributedBy"]'
      );
      const attenuationInput = container.querySelector(
        'input[name="attenuationLevel"]'
      );

      fireEvent.change(nameInput, {
        target: { value: newBeer.name },
      });

      fireEvent.change(taglineInput, {
        target: { value: newBeer.tagline },
      });

      fireEvent.change(descriptionInput, {
        target: { value: newBeer.description },
      });

      fireEvent.change(firstBrewedInput, {
        target: { value: newBeer.first_brewed },
      });

      fireEvent.change(brewersTipsInput, {
        target: { value: newBeer.brewers_tips },
      });

      fireEvent.change(contributedByInput, {
        target: { value: newBeer.contributed_by },
      });

      fireEvent.change(attenuationInput, {
        target: { value: newBeer.attenuation_level },
      });

      await waitFor(() => {
        fireEvent.click(screen.getByRole("button", { name: /add beer/i }));
      });

      scope.done();

      expect(requestBody.name).toBe(newBeer.name);
      expect(requestBody.tagline).toBe(newBeer.tagline);
      expect(requestBody.description).toBe(newBeer.description);
      expect(requestBody.first_brewed).toBe(newBeer.first_brewed);
      expect(requestBody.brewers_tips).toBe(newBeer.brewers_tips);
      expect(requestBody.attenuation_level).toBe(
        String(newBeer.attenuation_level)
      );
      expect(requestBody.brewers_tips).toBe(newBeer.brewers_tips);
    });
  });
});
