import React from 'react'
import HomePage from '../HomePage'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test('header renders with correct text', () => {
    render(<HomePage />);
    const headerEl = screen.getByTestId("header");

    expect(headerEl.textContent).toContain("PairPro")   
    expect(headerEl.textContent).toContain("Hello, world!")   
    expect(headerEl.textContent).toContain("We won't REST until you find your")  
    expect(headerEl.textContent).toContain("IDEal Pair Programming Partners")
  
})
