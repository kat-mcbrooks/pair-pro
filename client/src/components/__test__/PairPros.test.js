import React from "react";
import PairProsPage from "../PairProsPage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("PairProsPage renders with correct text", () => {
  render(<PairProsPage />);

  const nameEl = screen.getByTestId("welcometext");
  expect(nameEl.textContent).toBe(" Welcome to PairPro");
  const pairEl = screen.getByTestId("pairtext");
  expect(pairEl.textContent).toBe("Pick a pair and let's get coding!");
});
