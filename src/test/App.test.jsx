import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./../App";

describe("App component", () => {
  test("renders without errors", () => {
    expect(() => render(<App />)).not.toThrow();
  });
});
