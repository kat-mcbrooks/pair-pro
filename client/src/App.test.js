import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import "@testing-library/jest-dom/extend-expect"


test('header renders with correct text', () => {
  // const { getByTestId } = render(<App />);
  // const RouteEl = screen.getByTestId("container");
  render(<App />)
  const element = screen.getByTestId('container')
  expect(element.textContent).toBe("PairPro Login Register")

})
