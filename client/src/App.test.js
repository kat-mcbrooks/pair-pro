import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { useContext, useReducer } from "react";
import { AuthContext } from "./context/AuthContext";

test('header renders with correct text', () => {
  // const { getByTestId } = render(<App />);
  // const RouteEl = screen.getByTestId("container");
  const { state } = useContext(AuthContext);
  render(<App />)
  const element = screen.getByTestId('container')
  expect(element.textContent).toBe("PairPro Login Register")

})
